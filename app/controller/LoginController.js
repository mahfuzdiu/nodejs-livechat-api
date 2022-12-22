const login = (req, res) => {
  let request = req.body
  res.json(200, [request.email, request.password]);
};

module.exports = {
  login,
}