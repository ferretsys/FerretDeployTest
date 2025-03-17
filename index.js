const express = require('express');
const fs = require("fs");

const app = express();

const config = fs.existsSync("run/config.json") ? JSON.parse(fs.readFileSync("run/config.json")) : JSON.parse(fs.readFileSync("defaults/config.json"));

app.get('/', (req, res) => {
    console.log("serving")
    res.send('Hello' + JSON.stringify(config, null, 4));
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});