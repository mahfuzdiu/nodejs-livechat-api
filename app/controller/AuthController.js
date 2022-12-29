const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const knex = require('../../database/knex')

const login = (req, res) => {
  knex.select().from('users')
      .where('email', req.body.email)
      .then(function (userArray){
        if(userArray.length){
            let user = userArray[0]
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign({
                    data: {
                        id: user.id,
                        email: user.email,
                        created_at: user.created_at
                    }
                }, process.env.JWT_PRIVATE_KEY, { expiresIn: 60 * 30 })

                //set token as http only cookie
                res.cookie('token', token)
                res.send('Successfully logged in...')
            } else
                res.json('Wrong password')
        } else
            res.json('User doesn\'t exists')
      })
};

module.exports = {
  login,
}