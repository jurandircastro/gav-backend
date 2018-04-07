let Communication = require('../models/communication');

const mainController = {

  createCommunication: (data, callback) => {
    new Communication(
      {
        name:data.name,
        groups_ids:[],
        project_id:data.project_id,
        file_id : data.file_id
    }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },
  
  editCommunication: (data, callback) => {
    Communication.findOneAndUpdate({_id: data.communication_id}, { $set:
      {
        name: data.communicationUpdate.name,
      }
    }, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  listAllCommunicationsByProject: (id_project, callback) => {
    Communication.find({project_id: id_project}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  listCommunicationByFile: (id_file, callback) => {
    Communication.findOne({file_id: id_file}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  deleteCommunication: (data, callback) => {
    Communication.findOneAndRemove({_id: data.communication_id},function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  addGroupToCommunication: (data, callback) => {
    Communication.findByIdAndUpdate(data.communication_id, {$push: {groups_ids: data.group_id }}, function (err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  }
}

module.exports = mainController;
