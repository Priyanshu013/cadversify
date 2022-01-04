const mongoose = require("mongoose");
const Joi = require("joi");

const cadentSchema = new mongoose.Schema({
  name: {
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
  phone: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 15,
  },
});
const Cadent = mongoose.model("cadents", cadentSchema);

function validateCadent(cadent) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(3).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  }).unknown(true);

  const validation = schema.validate(cadent);
  return validation;
}

exports.Cadent = Cadent;
exports.validateCadent = validateCadent;
