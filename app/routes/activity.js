const Controller = require('../controllers/activity');

module.exports = (app) => {
    
    app.post('/add_activity_to_item', (req, res, next) => {
      let data = req.body;
      Controller.createActivity(data, function(data){
        res.json(data);
      });
    });
    app.get('/list_all_activitys_by_item/:itemId', (req, res, next) => {
      let itemId = req.params.itemId;
      Controller.listAllActivitysByItem(itemId, function(data){
        res.json(data);
      });
    });
    app.post('/change_done_by_activity', (req, res, next) => {
      let data = req.body;
      Controller.changeDone(data, function(data){
        res.json(data);
      });
    });
    app.post('/add_group_to_activity', (req, res, next) => {
      let data = req.body;
      Controller.addGroupToActivity(data, function(data){
        res.json(data);
      });
    });
    
}