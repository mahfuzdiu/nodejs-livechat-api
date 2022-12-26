const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DATABASE_HOST,
        port : process.env.DATABASE_PORT,
        user : process.env.DATABASE_USERNAME,
        password : process.env.DATABASE_PASSWORD,
        database : process.env.DATABASE_NAME
    },
    migrations: {
        tableName: 'migrations'
    }
});