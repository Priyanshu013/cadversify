const express = require("express");
const auth = require("../middleware/auth");
const { validateCadvocate, Cadvocate } = require("../models/cadvocate");
const bcrypt = require("bcrypt");
const router = express.Router();
const lodash = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toString().replace(/:/g, "-") + file.originalname);
  },
});
const upload = multer({ storage: storage });

//REQUESTS
router.get("/me", auth, async (req, res) => {
  const cadvocate = await Cadvocate.findById(req.cadvocate._id).select(
    "-password"
  );
  res.send(cadvocate);
});

const files = upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "photoid", maxCount: 1 },
]);

router.post("/register", files, async (req, res) => {
  //Validate the given inputs
  const result = validateCadvocate(req.body);
  if (result.error) {
    console.log(result.error.details[0].message);
    return res.status(400).send(result.error.details[0].message);
  }

  //Check if the cadvocate already exists or not
  let cadvocate = await Cadvocate.findOne({ email: req.body.cadvocate.email });
  if (cadvocate) return res.status(400).send("Cadvocate already registered");

  //Add new cadvocate
  cadvocate = new Cadvocate({
    firstName: req.body.cadvocate.firstName,
    lastName: req.body.cadvocate.lastName,
    email: req.body.cadvocate.email,
    password: req.body.cadvocate.password,
    phoneNumber: req.body.cadvocate.phoneNumber,
    city: req.body.cadvocate.city,
    country: req.body.cadvocate.country,
    profession: req.body.cadvocate.profession,
    organization: req.body.cadvocate.organization,
    designation: req.body.cadvocate.designation,
    resume: req.files["resume"][0].path,
    photoid: req.files["photoid"][0].path,
    experience: req.body.cadvocate.experience,
    aboutYourself: req.body.cadvocate.aboutYourself,
    whyCadversify: req.body.cadvocate.whyCadversify,
    interviewDateTime: req.body.cadvocate.interviewDateTime,
    referralCode: req.body.cadvocate.referralCode,
  });

  console.log(req.body.cadvocate.firstName);

  const salt = await bcrypt.genSalt(10);
  cadvocate.password = await bcrypt.hash(cadvocate.password, salt);
  await cadvocate.save();

  const token = jwt.sign({ _id: cadvocate._id }, config.get("jwtPrivateKey"));
  res.header("x-auth-token", token).send(cadvocate);
});

module.exports = router;
