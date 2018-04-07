
const Controlador = require('../controllers/message');

module.exports = (app) => {

  app.post('/new_message/', (req, res, next) => {
    let usuario = req.body;
     Controlador.createMessage(usuario, function(data){
        res.json(data);
     });
  });
  app.get('/list_all_messages_by_communication/:idCommunication', (req, res, next) => {
    let idCommunication = req.params.idCommunication;
     Controlador.listAllMessagesByCommunication(idCommunication, function(data){
        res.json(data);
     });
  });

}
