const express = require("express");
const router = express.Router();

const cadvocates = [
  { id: 1, name: "Priyanshu", age: 21, experience: "4", company: "abc" },
  { id: 2, name: "Test", age: 21, experience: "4", company: "abc" },
  { id: 3, name: "Example", age: 21, experience: "4", company: "abc" },
];

router.get("/", (req, res) => {
  res.send(cadvocates);
});

router.get("/:id", (req, res) => {
  //checking if the cadvocate exists or not
  const cadvocate = cadvocates.find((c) => c.id === parseInt(req.params.id));
  if (!cadvocate)
    res.status(404).send("The cadvocate with the given id was not found");
  else res.send(cadvocate);
});

module.exports = router;
