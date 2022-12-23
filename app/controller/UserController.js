const schema = require('../validators/UserStoreValidators')

const store = (req, res) =>{
    let {error, value} = schema.validate(req.body, {abortEarly: false})

    if(error) return res.json(error.details)

    return res.json(200, value)
}

module.exports = {
    store,
}