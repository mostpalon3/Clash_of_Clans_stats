const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    methods: ['GET', 'POST'], // Allowed HTTP methods
    credentials: true, // Allow cookies or authentication headers
}));
app.use(express.json());

const PORT = process.env.PORT || 6001;

// Clash of Clans API setup
const BASE_URL = 'https://api.clashofclans.com/v1';
const webToken = process.env.WEB_TOKEN;

console.log("Web Token:", webToken);

app.get('/player/:tag', async (req, res) => {
    const playerTag = encodeURIComponent(req.params.tag);
    try {
        const response = await axios.get(`${BASE_URL}/players/%23${playerTag}`, {
            headers: { Authorization: `Bearer ${webToken}` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data });
    }
});

app.get('/clan/:tag', async (req, res) => {
    const clanTag = encodeURIComponent(req.params.tag);
    try {
        const response = await axios.get(`${BASE_URL}/clans/%23${clanTag}`, {
            headers: { Authorization: `Bearer ${webToken}` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});