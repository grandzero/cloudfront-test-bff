// server/index.js
const path = require('path');
const express = require("express");
require('dotenv').config()

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());



app.get("/build/js/app.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/js', 'app.js'));
});

app.get("/build/js/web3.min.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/js', 'web3.min.js'));
});

app.get("/very-secret-message", (req, res) => {
    res.json({message:"Secret Message : " + process.env.SECRET_MESSAGE});
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

