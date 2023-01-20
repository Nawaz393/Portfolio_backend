const joi = require("joi");

const schema = joi.object().keys({
  userName: joi.string().min(5).max(12).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  role: joi.string().min(5),
});

module.exports = schema;
