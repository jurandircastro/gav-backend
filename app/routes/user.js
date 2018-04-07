
const Controlador = require('../controllers/user');

module.exports = (app) => {

  app.post('/new_user', (req, res, next) => {
    let usuario = req.body;
     Controlador.createUser(usuario, function(data){
        res.json(data);
     });
  });

  app.get('/search_user/:userId', (req, res) => {
      let userId = req.params.userId;
       Controlador.searchUser(userId ,function(data){
          res.json(data);
       });
  });

  app.get('/list_all_users/', (req, res) => {
     Controlador.listAllUsers(function(data){
        res.json(data);
     });
  });

  app.post('/authenticate_user/', function(req, res) {
    let data = req.body;
    Controlador.authenticateUser(data, function(data){
        res.json(data);
    });
  });
  app.post('/edit_user/', function(req, res) {
    let data = req.body;
    Controlador.editUser(data, function(data){
        res.json(data);
    });
  });

}
