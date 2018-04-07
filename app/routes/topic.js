const Controller = require('../controllers/topic');

module.exports = (app) => {
    
    app.post('/add_topic_to_project', (req, res, next) => {
      let data = req.body;
      Controller.createTopic(data, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_topics_by_project/:projectId', (req, res, next) => {
      let projectId = req.params.projectId;
      Controller.listAllTopicslByProject(projectId, function(data){
        res.json(data);
      });
    });

    
}