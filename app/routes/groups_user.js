const Controller = require('../controllers/groups_user');

module.exports = (app) => {
    
    app.post('/add_group_to_project', (req, res, next) => {
      let data = req.body;
      Controller.createGroup(data, function(data){
        res.json(data);
      });
    });

    app.post('/add_user_to_group', (req, res, next) => {
      let data = req.body;
      Controller.addUserToGroup(data, function(data){
        res.json(data);
      });
    });

    app.get('/list_all_groups_by_project/:idProject', (req, res, next) => {
      let idProject = req.params.idProject;
      Controller.listAllGroupsByProject(idProject, function(data){
          console.log(data);
          res.json(data);
       });
    });

    app.post('/edit_group', (req, res, next) => {
       let data = req.body;
       Controller.editGroup(data, function(data){
          res.json(data);
       });
    });

    app.post('/search_group/:idGroup', (req, res, next) => {
       let id_group = req.params.idGroup;
       Controller.searchGroup(id_group, function(data){
          res.json(data);
       });
    });
    
    app.get('/search_users_by_group/:idGroup', (req, res, next) => {
       let id_group = req.params.idGroup;
       Controller.searchUsersByGroup(id_group, function(data){
          res.json(data);
       });
    });

    app.post('/delete_group', (req, res, next) => {
      let data = req.body;
      Controller.deleteGroup(data, function(data){
        res.json(data);
      });
   });
}