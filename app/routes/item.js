const Controller = require('../controllers/item');

module.exports = (app) => {
    
    app.post('/add_item_to_management', (req, res, next) => {
      let data = req.body;
      Controller.createItem(data, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_itens_by_management/:managementId', (req, res, next) => {
      let managementId = req.params.managementId;
      Controller.listAllItensByManagement(managementId, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_itens_by_project/:projectId', (req, res, next) => {
      let projectId = req.params.projectId;
      Controller.listAllItensByProject(projectId, function(data){
        res.json(data);
      });
    });
    app.post('/add_percentage_itens', (req, res, next) => {
      let data = req.body;
      Controller.addPercentage(data, function(data){
        res.json(data);
      });
    });
    
}