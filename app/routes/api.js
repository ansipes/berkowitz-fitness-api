const models = require('./../../models')

module.exports = function (server) {

  server.get('/api/users', function (req, res) {

    models.User.findAll({}).then(function (result) {
      res.json(result)
    })
    
  })

}
