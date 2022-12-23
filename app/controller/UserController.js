const store = (req, res) =>{
    return res.json(200, req.body)
}

module.exports = {
    store,
}