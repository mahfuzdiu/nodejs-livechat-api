const Joi = require('joi')

const schema = Joi.object({
    "name": Joi.string().required(),
    "mobile": Joi.string(),
    "address": Joi.string()
})

module.exports = schema