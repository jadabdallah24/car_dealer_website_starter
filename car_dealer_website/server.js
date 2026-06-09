const express = require("express");
const cors = require("cors");
require("dotenv").config();
const OpenAI = require("openai");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/api/cars", async (req, res) => {
  const { make, model, year } = req.query;

  if (!make || !model) {
    return res.status(400).json({
      error: "Make and model are required."
    });
  }

  let apiUrl = `https://api.api-ninjas.com/v1/cars?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`;

  if (year) {
    apiUrl += `&year=${encodeURIComponent(year)}`;
  }

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "X-Api-Key": process.env.API_NINJAS_KEY
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Server failed to fetch API data."
    });
  }
});
app.post("/api/ai", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required."
    });
  }

  const inventoryContext = `
Prime Auto Gallery inventory:
- 2022 BMW M4 Competition: Coupe, Automatic, AWD, 18,000 km, $76,900.
- 2021 Mercedes-Benz GLE: SUV, Automatic, AWD, 42,000 km, $58,500.
- 2020 Audi S4 Premium: Sedan, Automatic, AWD, 35,000 km, Tuned, $39,900.
- 2021 Porsche 911 Turbo S: Supercar, PDK, AWD, 9,500 km, $189,000.
- 2019 Volkswagen Golf R: Hatchback, Manual, AWD, 52,000 km, $33,900.
- 2023 Chevrolet Corvette: Coupe, Automatic, RWD, 6,000 km, $92,500.
- Mercedes GLS 600 Maybach: SUV, Automatic, AWD, Luxury, Price Upon Request.
- Corvette ZR1: Supercar, Automatic, RWD, Orange, Price Upon Request.
- McLaren 765LT Batman Spec: Supercar, Automatic, RWD, Black/Red, Special Edition, Price Upon Request.
- Ferrari 488 Pista: Supercar, Automatic, RWD, Grey with red interior, Price Upon Request.
- Ferrari 812 Competizione: Supercar, Automatic, RWD, Limited, Price Upon Request.
- Lamborghini Revuelto Matte Purple: Supercar, Automatic, AWD, Hybrid, Price Upon Request.
- BMW M4 Silver Surfer Spec: Coupe, Automatic, AWD, Tuned, Matte grey/chrome, Price Upon Request.
- Audi RS7 ABT Legacy: Sedan, Automatic, AWD, Tuned, Price Upon Request.
- Range Rover SVR: SUV, Automatic, AWD, Blue with carbon hood, Price Upon Request.
- GR Yaris Rally Spec: Hatchback, Manual, AWD, Rally Build, Price Upon Request.
- 2017 Civic Type R Hatchback White: Hatchback, Manual, FWD, Sport, Price Upon Request.
- Toyota GT86 2015 Grey TRD: Coupe, Manual, RWD, TRD Kit, Price Upon Request.
`;

  try {
    const response = await openai.responses.create({
      model: "gpt-5.2",
      input: `
You are Prime AI, a helpful car dealership assistant for Prime Auto Gallery.

Use only the inventory below when recommending or comparing cars.
Be concise, professional, and helpful.
If the user asks for something not in inventory, say it is not currently listed.
Do not invent prices, damage history, modifications, specs, or availability.

${inventoryContext}

Customer question:
${message}
`
    });

    res.json({
      reply: response.output_text
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "AI assistant failed to respond. Check your API key or server terminal."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});