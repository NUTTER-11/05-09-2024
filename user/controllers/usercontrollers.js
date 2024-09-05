const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const idschema = Joi.object({
    id: Joi.number().integer().required()
  });

const userSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    university: Joi.string().required()
  });


module.exports = {validator,idschema,userSchema};