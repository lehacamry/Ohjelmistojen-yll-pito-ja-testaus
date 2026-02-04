const express = require("express");
const converter = require("./converter");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/hex", (req, res) => {
  try {
    const hex = req.query.hex;
    const rgb = converter.hexToRgb(hex);
    res.send(`RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => console.log(`Server: localhost:${port}`));
}
module.exports = app;