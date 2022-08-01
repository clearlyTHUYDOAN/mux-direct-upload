const axios = require('axios')
const express = require('express')
const app = express()

// Express configuration
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// Allow you to store API keys in a .env file and load them in as needed
const dotenv = require('dotenv');
dotenv.config();

const baseUrl = 'https://api.mux.com'
const port = process.env.PORT || 3001

const options = {  
  headers: {
    'User-Agent': `Mux Direct Upload Button`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  auth: {
    username: process.env.MUX_ACCESS_TOKEN_ID,
    password: process.env.MUX_SECRET_KEY,
  },
  mode: 'cors',
}

app.post('/upload', async (req, res) => {
  try {
    const response = await axios.post(`${baseUrl}/video/v1/uploads`, { 
      "cors_origin": "*",
      "new_asset_settings": {
      "playback_policy": [
        "public"
      ],
    } }, options)
    return res.send(response.data && response.data.data);
  } catch (errorRes) {
    return Promise.reject(
      (errorRes.response && errorRes.response.data.error) || errorRes
    );
  }
})

// 🗒️ Instead of polling, we wait until Mux tells us that our video asset has been created.
app.post('/webhook', async (req, res) => {
  console.log('🪝 We got a webhook!', req.body);
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`👂🏻 Example app listening on port ${process.env.PORT}`)
})
