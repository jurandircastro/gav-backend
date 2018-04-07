const Controller = require('../controllers/communication');

module.exports = (app) => {
    
    app.post('/new_communication', (req, res, next) => {
      let data = req.body;
      Controller.createCommunication(data, function(data){
        res.json(data);
      });
    });

    app.post('/add_group_to_communication', (req, res, next) => {
      let data = req.body;
      Controller.addGroupToCommunication(data, function(data){
        res.json(data);
      });
    });

    app.get('/list_all_communications_by_project/:idProject', (req, res, next) => {
      let idProject = req.params.idProject;
      Controller.listAllCommunicationsByProject(idProject, function(data){
          res.json(data);
       });
    });

    app.get('/list_communication_by_file/:idFile', (req, res, next) => {
      let idFile = req.params.idFile;
      Controller.listCommunicationByFile(idFile, function(data){
          res.json(data);
       });
    });

    app.post('edit_communication', (req, res, next) => {
       let data = req.body;
       Controller.editCommunication(data, function(data){
          res.json(data);
       });
    });

    app.post('/delete_communication', (req, res, next) => {
      let data = req.body;
      Controller.deleteCommunication(data, function(data){
        res.json(data);
      });
    });
    app.post('/add_group_to_communication', (req, res, next) => {
      let data = req.body;
      Controller.addGroupToCommunication(data, function(data){
        res.json(data);
      });
    });
}