// ============================================================
// server.js – Prime Auto Gallery backend
// Handles:
//   GET  /api/cars  → proxies API Ninjas for live car specs
//   POST /api/ai    → calls OpenAI Chat Completions and returns reply
// ============================================================

const express = require("express");
const cors    = require("cors");
require("dotenv").config();

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ── OpenAI is loaded lazily so a missing key doesn't crash startup ──
function getOpenAI() {
  const OpenAI = require("openai");
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
}

// ============================================================
// GET /api/cars  – proxy for API Ninjas (key stays server-side)
// ============================================================
app.get("/api/cars", async (req, res) => {
  const { make, model, year } = req.query;

  if (!make || !model) {
    return res.status(400).json({ error: "Make and model are required." });
  }

  if (!process.env.API_NINJAS_KEY) {
    return res.status(500).json({ error: "API Ninjas key is not configured on the server." });
  }

  let apiUrl = `https://api.api-ninjas.com/v1/cars?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`;
  if (year) apiUrl += `&year=${encodeURIComponent(year)}`;

  try {
    const response = await fetch(apiUrl, {
      headers: { "X-Api-Key": process.env.API_NINJAS_KEY }
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json(data);
    res.json(data);
  } catch (error) {
    console.error("API Ninjas fetch error:", error.message);
    res.status(500).json({ error: "Server failed to fetch car data." });
  }
});

// ============================================================
// POST /api/ai – OpenAI Chat Completions proxy
//
// Accepts: { message: string }
// Returns: { reply: string }  or  { error: string }
//
// Error mapping:
//   missing key       → 503
//   401 invalid key   → 401
//   429 quota exceeded→ 503
//   other             → 500
// ============================================================

const INVENTORY_CONTEXT = `
Prime Auto Gallery – Current Inventory:

Priced Vehicles:
- 2022 BMW M4 Competition: Coupe, Automatic, AWD, 18,000 km, $76,900. Mods: aftermarket exhaust, M Performance carbon mirrors.
- 2021 Mercedes-Benz GLE: SUV, Automatic, AWD, 42,000 km, $58,500. No modifications.
- 2020 Audi S4 Premium: Sedan, Automatic, AWD, 35,000 km, Tuned, $39,900. Mods: ECU stage 1 tune (+40hp), Milltek exhaust, lowering springs.
- 2021 Porsche 911 Turbo S: Supercar, PDK, AWD, 9,500 km, $189,000. No modifications.
- 2019 Volkswagen Golf R: Hatchback, Manual, AWD, 52,000 km, $33,900. No modifications.
- 2023 Chevrolet Corvette Stingray: Coupe, Automatic, RWD, 6,000 km, $92,500. No modifications.

Price Upon Request Vehicles:
- Mercedes GLS 600 Maybach: SUV, Automatic, AWD, Luxury Edition.
- Corvette ZR1: Supercar, Automatic, RWD, Orange.
- McLaren 765LT Batman Spec: Supercar, Automatic, RWD, Black/Red Special Edition. Mods: MSO carbon splitter, titanium exhaust, custom livery.
- Ferrari 488 Pista: Supercar, Automatic, RWD, Grigio Silverstone / Rosso Interior.
- Ferrari 812 Competizione: Supercar, Automatic, RWD, Limited (999 units), 830hp V12.
- Lamborghini Revuelto Matte Purple: Supercar, Automatic, AWD, Hybrid, 1000+hp. Mods: Ad Personam matte purple wrap, exposed carbon interior.
- BMW M4 Silver Surfer Spec: Coupe, Automatic, AWD, Tuned. Mods: matte grey wrap, chrome trim, carbon-ceramic brakes, Akrapovic exhaust, ECU stage 2.
- Audi RS7 ABT Legacy: Sedan, Automatic, AWD, Tuned – ABT Kit. Mods: ABT power kit (+130hp), body kit, 23" forged wheels.
- Range Rover SVR: SUV, Automatic, AWD, Performance. Mods: carbon fibre bonnet, Estoril Blue.
- GR Yaris Rally Spec: Hatchback, Manual, AWD, Rally Build. Mods: full rally aero kit, coilovers, bucket seats.
- 2017 Civic Type R Hatchback White: Hatchback, Manual, FWD, Championship White.
- Toyota GT86 2015 Grey TRD: Coupe, Manual, RWD, TRD Kit. Mods: TRD lip, spoiler, exhaust, suspension.
`;

app.post("/api/ai", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(503).json({
      error: "Prime AI is currently unavailable — OPENAI_API_KEY is not set in .env. Please add your key and restart the server."
    });
  }

  try {
    const openai = getOpenAI();

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content:
            `You are Prime AI, a friendly and professional assistant for Prime Auto Gallery. ` +
            `Answer questions about our vehicles, comparisons, recommendations, test drives, and financing. ` +
            `Be concise and warm. Only refer to vehicles in our inventory below. ` +
            `Do not invent prices or specs for cars not listed.\n\n` +
            INVENTORY_CONTEXT
        },
        { role: "user", content: message }
      ]
    });

    const reply = completion.choices?.[0]?.message?.content?.trim()
      || "I could not generate a response. Please try again.";

    res.json({ reply });

  } catch (err) {
    console.error("OpenAI error →", err?.status, err?.code, err?.message);

    const status = err?.status;

    if (status === 401) {
      return res.status(401).json({
        error: "Prime AI has an invalid API key. Please check your OPENAI_API_KEY in .env."
      });
    }
    if (status === 429) {
      return res.status(503).json({
        error: "Prime AI is currently unavailable — your OpenAI quota or billing limit has been reached. Please top up your OpenAI account and try again."
      });
    }
    if (status === 503) {
      return res.status(503).json({
        error: "OpenAI servers are temporarily unavailable. Please try again in a moment."
      });
    }

    // Catch-all
    return res.status(500).json({
      error: `Prime AI error: ${err?.message || "Unknown error"}. Check the server terminal for details.`
    });
  }
});

app.listen(PORT, () => {
  console.log(`\n✅  Prime Auto Gallery → http://localhost:${PORT}`);
  console.log(`    OPENAI_API_KEY : ${process.env.OPENAI_API_KEY ? "✅ loaded" : "❌ MISSING — add to .env"}`);
  console.log(`    API_NINJAS_KEY : ${process.env.API_NINJAS_KEY  ? "✅ loaded" : "❌ MISSING — add to .env"}\n`);
});