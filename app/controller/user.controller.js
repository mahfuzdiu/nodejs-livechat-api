const userStoreSchema = require('../validators/users/user.store.validators')
const userUpdateSchema = require('../validators/users/user.update.validators')

const knex = require('../../database/knex')
const bcrypt = require('bcryptjs')

const index = (req, res) =>{
    knex.select()
        .from('users')
        .where('id', req.session.userId)
        .where('deleted_at', null)
        .then(function (user){ return res.send(user)})
}

const store = (req, res) =>{
    let {error, value} = userStoreSchema.validate(req.body, {abortEarly: false})
    if(error) return res.json(error.details)
    delete value.confirm_password
    value.password = bcrypt.hashSync(value.password, 10)

    knex.insert(value).into('users')
        .returning('id')
        .then(function (id){
            return res.send('Added a new user, id: ' + id)
        })
}

const update = (req, res) => {
    const {error, value} = userUpdateSchema.validate(req.body)
    if(error) return res.json(error)
    knex.update(value)
        .into('users')
        .where('id', req.params.id)
        .then(function (result){ res.json(result)})
}

const destroy = (req, res) => {
    knex('users').where('id', req.params.id).update({deleted_at: knex.fn.now()})
        .then(function (result) {
            res.json(result)
        })
}

module.exports = {
    index,
    store,
    update,
    destroy
}