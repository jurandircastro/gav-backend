let Acceptance = require('../models/acceptance');

const AcceptanceController = {

  newAcceptance: (data, callback) => {
    new Acceptance(
      {
        name: data.acceptance_name,
        path: data.acceptance_path,
        project_id: data.project_id
      }
    ).save(function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback({erroq: err});
      }
    });
  },

  listAllAcceptancesByProjectId: (project_id, callback) => {
    Acceptance.find({ "project_id":project_id }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

 deleteAcceptance: (data, callback) => {
   Acceptance.findOneAndRemove({ "name":data.name }, function(err, obj) {
        if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

  setPath: (data, callback) => {
    Acceptance.findByIdAndUpdate(data.acceptance_id._id , {$set: { path: data.acceptance_path } }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  }

}

module.exports = AcceptanceController;
