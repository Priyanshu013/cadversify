const mongoose = require("mongoose");
const Joi = require("joi");

const cadvocateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2550,
    password: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 15,
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  country: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  profession: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  organization: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  designation: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  resume: {
    type: String,
    required: true,
  },
  photoid: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 456,
  },
  aboutYourself: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
  },
  whyCadversify: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
  },
  interviewDateTime: {
    type: String,
    required: true,
  },
});
const Cadvocate = mongoose.model("cadvocates", cadvocateSchema);

function validateCadvocate(cadvocate) {
  const schema = Joi.object({
    firstName: Joi.string().max(50).trim(true).required(),
    lastName: Joi.string().max(50).trim(true).required(),
    email: Joi.string().min(3).max(255).trim(true).required().email(),
    password: Joi.string().max(400).trim(true).required(),
    phoneNumber: Joi.string().required(),
    city: Joi.string().max(50).trim(true).required(),
    country: Joi.string().max(50).trim(true).required(),
    profession: Joi.string().max(255).trim(true).required(),
    designation: Joi.string().max(255).trim(true).required(),
    organization: Joi.string().max(255).trim(true).required(),
    experience: Joi.number().max(50).required(),
    aboutYourself: Joi.string().max(300).trim(true).required(),
    whyCadversify: Joi.string().max(300).trim(true).required(),
    interviewDateTime: Joi.string().required(),
    referralCode: Joi.string().max(255).trim(true),
  }).unknown(true);

  const validation = schema.validate(cadvocate);
  return validation;
}

exports.Cadvocate = Cadvocate;
exports.validateCadvocate = validateCadvocate;
