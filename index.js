const express = require('express');
const fs = require("fs");

const app = express();

app.get('/', (req, res) => {
    console.log("serving")
    res.send('Hello' + fs.readFileSync("served.txt"));
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});