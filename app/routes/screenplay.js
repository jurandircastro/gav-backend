const Controlador = require('../controllers/screenplay');

module.exports = (app) => {

  app.post('/new_screenplay/', (req, res, next) => {
    let screenplay = req.body;
     Controlador.newScreenplay(screenplay, function(data){
        res.json(data);
     });
  });

  app.get('/list_all_screenplay_by_project/:project_id', (req, res, next) => {
    let project_id = req.params.project_id;
     Controlador.listAllScreenplaysByProjectId(project_id, function(data){
        res.json(data);
     });
  });

  app.post('/file', (req, res, next) => {
      var file = req.files.file;
      res.json(file);
  });

  app.post('/insert_path_screenplay', (req, res, next) => {
    let screenplay = req.body;
     Controlador.setPath(screenplay, function(data){
        res.json(data);
     });
  });
  app.post('/delete_screenPlay', (req, res, next) => {
    let data = req.body;
     Controlador.deleteScreenPlay(data, function(data){
        res.json(data);
     });
  });
}
