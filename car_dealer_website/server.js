const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});