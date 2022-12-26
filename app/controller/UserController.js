const schema = require('../validators/UserStoreValidators')

const store = (req, res) =>{
    let {error, value} = schema.validate(req.body, {abortEarly: false})
    if(error) return res.json(error.details)
        res.send(value)

    //res.json(200, 'User created')
}

module.exports = {
    store,
}