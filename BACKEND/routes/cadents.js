const express = require("express");
const auth = require("../middleware/auth");
const { validateCadent, Cadent } = require("../models/cadent");
const bcrypt = require("bcrypt");
const router = express.Router();
const mongoose = require("mongoose");
const lodash = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/me", auth, async (req, res) => {
  const cadent = await Cadent.findById(req.cadent._id).select("-password");
  res.send(cadent);
});

router.post("/", async (req, res) => {
  //Validate the given inputs
  const result = validateCadent(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  //Check if the cadent already exists or not
  let cadent = await Cadent.findOne({ email: req.body.email });
  if (cadent) return res.status(400).send("Cadent already registered");

  //Add new cadent
  cadent = new Cadent({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  });

  const salt = await bcrypt.genSalt(10);
  cadent.password = await bcrypt.hash(cadent.password, salt);
  await cadent.save();

  const token = jwt.sign({ _id: cadent._id }, config.get("jwtPrivateKey"));
  res
    .header("x-auth-token", token)
    .send(lodash.pick(cadent, ["_id", "name", "email"]));
});

module.exports = router;
