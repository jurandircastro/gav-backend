const Controller = require('../controllers/management');

module.exports = (app) => {
    
    app.post('/add_management_to_project', (req, res, next) => {
      let data = req.body;
      Controller.createManagement(data, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_management_by_project/:projectId', (req, res, next) => {
      let projectId = req.params.projectId;
      Controller.listAllManagementByProject(projectId, function(data){
        res.json(data);
      });
    });

    
}