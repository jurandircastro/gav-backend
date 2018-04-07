const Controlador = require('../controllers/acceptance');

module.exports = (app) => {

  app.post('/new_acceptance/', (req, res, next) => {
    let acceptance = req.body;
     Controlador.newAcceptance(acceptance, function(data){
        res.json(data);
     });
  });

  app.get('/list_all_acceptance_by_project/:project_id', (req, res, next) => {
    let project_id = req.params.project_id;
     Controlador.listAllAcceptancesByProjectId(project_id, function(data){
        res.json(data);
     });
  });

  app.post('/insert_path_acceptance', (req, res, next) => {
    let acceptance = req.body;
     Controlador.setPath(acceptance, function(data){
        res.json(data);
     });
  });

  app.post('/delete_acceptance', (req, res, next) => {
    let data = req.body;
     Controlador.deleteAcceptance(data, function(data){
        res.json(data);
     });
  });
}
