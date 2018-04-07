const Controller = require('../controllers/juridical');

module.exports = (app) => {

    app.post('/add_juridical_to_topic', (req, res, next) => {
      let data = req.body;
      Controller.createJuridical(data, function(data){
        res.json(data);
      });
    });

    app.post('/add_alarm_to_juridical', (req, res, next) => {
      let data = req.body;
      Controller.createAlarm(data, function(data){
        res.json(data);
      });
    });
    app.post('/add_status_to_juridical', (req, res, next) => {
      let data = req.body;
      Controller.addStatus(data, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_juridical_by_topic/:topicId', (req, res, next) => {
      let topicId = req.params.topicId;
      Controller.listAllJuridicalByTopic(topicId, function(data){
        res.json(data);
      });
    });
    app.post('/add_CPB_CRT_to_project', (req, res, next) => {
      let data = req.body;
      Controller.createCPB_CRT(data, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_CPB_CRT_by_project/:projectId', (req, res, next) => {
      let projectId = req.params.projectId;
      Controller.listAllCPB_CRTByProject(projectId, function(data){
        res.json(data);
      });
    });

    app.post('/insert_path_juridical', (req, res, next) => {
      let juridical = req.body;
       Controller.setPath(juridical, function(data){
          res.json(data);
       });
    });

}
