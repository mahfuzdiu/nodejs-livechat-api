const Joi = require('joi')

const schema = Joi.object({
    'name': Joi.string().required(),
    'email': Joi.string().email().required(),
    "password": Joi.string().length(4).required(),
    "confirm_password": Joi.ref('password'),
    "mobile" : Joi.string(),
    "address": Joi.string()
})

module.exports = schema