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
    maxlength: 255,
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
    maxsize: 500,
  },
  photoid: {
    type: String,
    required: true,
    maxsize: 500,
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

function validateCadvocate(cadvocates) {
  const schema = Joi.object({
    firstName: Joi.string().min(1).max(50).required(),
    lastName: Joi.string().min(1).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(1).max(400).required(),
    phoneNumber: Joi.string().required(),
    city: Joi.string().min(1).max(50).required(),
    country: Joi.string().min(1).max(50).required(),
    profession: Joi.string().min(1).max(255).required(),
    designation: Joi.string().min(1).max(255).required(),
    organization: Joi.string().min(1).max(255).required(),
    experience: Joi.number().min(1).max(50).required(),
    aboutYourself: Joi.string().min(100).max(300).required(),
    whyCadversify: Joi.string().min(1).max(300).required(),
    interviewDateTime: Joi.string().required(),
    referralCode: Joi.string().min(1).max(255),
  }).unknown(true);

  const validation = schema.validate(cadvocates);
  return validation;
}

exports.Cadvocate = Cadvocate;
exports.validateCadvocate = validateCadvocate;
