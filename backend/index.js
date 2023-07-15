const express = require('express');
const cors = require('cors');
const axios = require("axios");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;
  const { first_name } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: password, first_name: first_name},
      {headers: {"private-key" : process.env.API_KEY}}
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);