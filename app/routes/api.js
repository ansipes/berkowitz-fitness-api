const models = require('./../../models')

module.exports = function (server) {

  /*
    Read all Users
  */

  server.get('/api/users', function (req, res) {

    models.User.findAll({}).then(function (result) {
      res.json(result)
    })

  })


  /*
    Read User by ID
  */

  server.get('/api/users/:id', function (req, res) {

    models.User.findById(req.params.id).then(function (result) {
      res.json(result)
    })
    
  })

}
