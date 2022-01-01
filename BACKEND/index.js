const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courses = require("./routes/courses");
const cadvocates = require("./routes/cadvocates");

mongoose
  .connect("mongodb://localhost/cadversify-test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("WELCOME TO CADVERSIFY SERVER");
});

app.use("/api/courses", courses);
app.use("/api/cadvocates", cadvocates);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}....`));
