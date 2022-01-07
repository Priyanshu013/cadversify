const mongoose = require("mongoose");
const Joi = require("joi");

const cadentSchema = new mongoose.Schema({
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
    firstName: Joi.string().min(5).max(50).required(),
    lastName: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(5).max(40).required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]+$/)
      .length(10)
      .required(),
    designation: Joi.string().min(5).max(255).required(),
    organization: Joi.string().min(5).max(255).required(),
    futureAspirations: Joi.string().min(5).max(456).required(),
    referralCode: Joi.string().min(1).max(255),
  }).unknown(true);

  const validation = schema.validate(cadent);
  return validation;
}

exports.Cadent = Cadent;
exports.validateCadent = validateCadent;
