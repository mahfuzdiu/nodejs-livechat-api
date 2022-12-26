const permissionMiddleware = (req, res, next) => {
    if(true)
        next()
    else
        res.json('Permission denied!')
}

module.exports = permissionMiddleware