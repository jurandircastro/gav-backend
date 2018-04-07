const Controller = require('../controllers/project');

module.exports = (app) => {

  app.post('/new_project', (req, res, next) => {
    let data = req.body;
      Controller.createProject(data, function(data){
        res.json(data);
     });
  });

  app.post('/search_project', (req, res, next) => {
    let data = req.body;
     Controller.searchProject(data ,function(data){
        res.json(data);
     });
  });

  app.get('/list_projects_by_user/:userId', (req, res, next) => {
     let userId = req.params.userId;
     console.log(userId);
  });

  app.get('/list_all_projects', (req, res, next) => {
     Controller.listAllProjects(function(data){
        res.json(data);
     });
  });

  app.post('/delete_project', (req, res, next) => {
    let data = req.body;
     Controller.deleteProject(data, function(data){
        res.json(data);
    });
  });

  app.post('/edit_project', (req, res, next) => {
    let data = req.body;
    Controller.editProject(data, function(data){
      res.json(data);
    });
  });
  app.post('/edit_image_project', (req, res, next) => {
    let data = req.body;
    Controller.editImageProject(data, function(data){
      res.json(data);
    });
  });

}
