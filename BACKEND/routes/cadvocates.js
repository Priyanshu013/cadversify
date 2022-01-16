const express = require("express");
const auth = require("../middleware/auth");
const { validateCadvocate, Cadvocate } = require("../models/cadvocate");
const bcrypt = require("bcrypt");
const router = express.Router();
const lodash = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");

router.get("/me", auth, async (req, res) => {
  const cadvocate = await Cadvocate.findById(req.cadvocate._id).select(
    "-password"
  );
  res.send(cadvocate);
});

router.post("/", async (req, res) => {
  //Validate the given inputs
  const result = validateCadvocate(req.body);
  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }

  //Check if the cadvocate already exists or not
  let cadvocate = await Cadvocate.findOne({ email: req.body.email });
  if (cadvocate) return res.status(400).send("Cadvocate already registered");

  //Add new cadvocate
  cadvocate = new Cadvocate({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    profession: req.body.profession,
    organization: req.body.organization,
    designation: req.body.designation,
    experience: req.body.experience,
    aboutYourself: req.body.aboutYourself,
    whyCadversify: req.body.whyCadversify,
    referralCode: req.body.referralCode,
  });

  const salt = await bcrypt.genSalt(10);
  cadvocate.password = await bcrypt.hash(cadvocate.password, salt);
  await cadvocate.save();

  const token = jwt.sign({ _id: cadvocate._id }, config.get("jwtPrivateKey"));
  res
    .header("x-auth-token", token)
    .send(lodash.pick(cadvocate, ["_id", "firstName", "email"]));
});

module.exports = router;
