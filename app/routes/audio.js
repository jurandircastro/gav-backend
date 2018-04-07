const Controlador = require('../controllers/audio');

module.exports = (app) => {

  app.post('/new_audio/', (req, res, next) => {
    let audio = req.body;
     Controlador.newAudio(audio, function(data){
        res.json(data);
     });
  });

  app.get('/list_all_audio_by_project/:project_id', (req, res, next) => {
    let project_id = req.params.project_id;
     Controlador.listAllAudiosByProjectId(project_id, function(data){
        res.json(data);
     });
  });

  app.post('/insert_path_audio', (req, res, next) => {
    let audio = req.body;
     Controlador.setPath(audio, function(data){
        res.json(data);
     });
  });

  app.post('/delete_audio', (req, res, next) => {
    let data = req.body;
     Controlador.deleteAudio(data, function(data){
        res.json(data);
     });
  });
}
