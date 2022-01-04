const config = require("config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const courses = require("./routes/courses");
const cadvocates = require("./routes/cadvocates");
const cadents = require("./routes/cadents");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey not defined");
  process.exit(1); //anything other than 0 is code for exit with an error
}
mongoose
  .connect("mongodb://localhost/cadversify-test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send(
    '<p style="color:black; font-size:40px; padding-top:80px; text-align:center; font-weight:bold; font-family: verdana">WELCOME TO CADVERSIFY SERVER</p>'
  );
});

app.use(express.json());
app.use("/api/courses", courses);
app.use("/api/cadvocates", cadvocates);
app.use("/api/cadents", cadents);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}....`));
