const mongoose = require("mongoose");
const Joi = require("joi");

const cadentSchema = new mongoose.Schema({
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
    type: String,
    required: true,
    minlength: 1,
    maxlength: 15,
  },
  designation: {
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
  futureAspirations: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 456,
  },
});
const Cadent = mongoose.model("cadents", cadentSchema);

function validateCadent(cadent) {
  const schema = Joi.object({
    firstName: Joi.string().max(50).trim(true).required(),
    lastName: Joi.string().max(50).trim(true).required(),
    email: Joi.string().email().trim(true).required(),
    password: Joi.string().trim(true).required(),
    phoneNumber: Joi.string().required(),
    designation: Joi.string().max(255).trim(true).required(),
    organization: Joi.string().max(255).trim(true).required(),
    futureAspirations: Joi.string().max(456).trim(true).required(),
    referralCode: Joi.string().trim(true).max(255),
  }).unknown(true);

  const validation = schema.validate(cadent);
  return validation;
}

exports.Cadent = Cadent;
exports.validateCadent = validateCadent;
