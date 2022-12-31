const jwt = require('jsonwebtoken')

const token = (req, res, next) => {
    try {
        let verifiedUser = jwt.verify(req.cookies.token, process.env.JWT_PRIVATE_KEY)
        if(verifiedUser){
            req.user = verifiedUser
            next()
        }
    }catch (error){
        res.status(401).send('Unauthorized access!')
    }
}

module.exports = token