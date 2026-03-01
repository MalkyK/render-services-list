// require('dotenv').config();
// const express = require('express');
// const sdk = require('@api/render-api');

// const app = express();
// const port = 3000;

// // התחברות ל-API של Render עם המפתח שלך
// sdk.auth(process.env.RENDER_API_KEY);

// app.get('/services', async (req, res) => {
//   try {
//     // משיכת רשימת השירותים
//     const { data } = await sdk.getServices({ limit: '20' });
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services?limit=20', {
      headers: {
        'Authorization': `Bearer ${process.env.RENDER_API_KEY}`,
        'Accept': 'application/json'
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch services from Render" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});