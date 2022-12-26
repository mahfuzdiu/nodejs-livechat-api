const knexfile = require('knexfile')
const environment = process.env.NODE_ENV || 'development'
console.log(knexfile[environment])
const knex = require('knex')(knexfile[environment]);

module.exports = knex