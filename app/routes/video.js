const Controlador = require('../controllers/video');

module.exports = (app) => {

  app.post('/new_video/', (req, res, next) => {
    let video = req.body;
     Controlador.newVideo(video, function(data){
        res.json(data);
     });
  });

  app.get('/list_all_video_by_project/:project_id', (req, res, next) => {
    let project_id = req.params.project_id;
     Controlador.listAllVideosByProjectId(project_id, function(data){
        res.json(data);
     });
  });

  app.post('/insert_path_video', (req, res, next) => {
    let video = req.body;
     Controlador.setPath(video, function(data){
        res.json(data);
     });
  });
  app.post('/delete_video', (req, res, next) => {
    let data = req.body;
     Controlador.deleteVideo(data, function(data){
        res.json(data);
     });
  });

}
