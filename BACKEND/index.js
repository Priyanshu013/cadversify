const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/cadversify-test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));
