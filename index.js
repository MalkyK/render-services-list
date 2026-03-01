require('dotenv').config();
const express = require('express');
const sdk = require('@api/render-api');

const app = express();
const port = 3000;

// התחברות ל-API של Render עם המפתח שלך
sdk.auth(process.env.RENDER_API_KEY);

app.get('/services', async (req, res) => {
  try {
    // משיכת רשימת השירותים
    const { data } = await sdk.getServices({ limit: '20' });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});