const mongoose = require("mongoose");
const Joi = require("joi");

const cadvocateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    password: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    minlength: 8,
    maxlength: 15,
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
  yearsOfExperience: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 456,
  },
  somethingAboutYourself: {
    type: String,
    required: true,
    minlength: 100,
    maxlength: 300,
  },
  whyCadversify: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 300,
  },
});
const Cadvocate = mongoose.model("cadvocates", cadvocateSchema);

function validateCadvocate(cadvocates) {
  const schema = Joi.object({
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(40).required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]+$/)
      .min(10)
      .max(15)
      .required(),
    profession: Joi.string().min(1).max(255).required(),
    designation: Joi.string().min(5).max(255).required(),
    organization: Joi.string().min(5).max(255).required(),
    yearsOfExperience: Joi.number().min(1).max(50).required(),
    somethingAboutYourself: Joi.string().min(100).max(300).required(),
    whyCadversify: Joi.string().min(1).max(300).required(),
    referralCode: Joi.string().min(1).max(255),
  }).unknown(true);

  const validation = schema.validate(cadvocates);
  return validation;
}

exports.Cadvocate = Cadvocate;
exports.validateCadvocate = validateCadvocate;
