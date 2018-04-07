let Juridical = require('../models/juridical');
let CPB_CRT = require('../models/CPB_CRT');

const mainController = {

  createJuridical: (data, callback) => {
    new Juridical(
      {
        name:data.name,
        topic_id: data.topic_id,
        file_path: data.path,
        type: data.type,
        observations: data.observations,
        
    }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },

  setPath: (data, callback) => {
    Juridical.findOneAndUpdate({_id:data.juridical_id} , {$set: { file_path: data.juridical_path } }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

  addStatus: (data, callback) => {
    Juridical.findOneAndUpdate({_id: data.juridical_id}, {$set:
      {
        status: data.status,
      }
    }, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  createAlarm: (data, callback) => {
    Juridical.findOneAndUpdate({_id: data.juridical_id}, {$set:
      {
        alarm: data.alarm,
      }
    }, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  listAllJuridicalByTopic: (id_topic, callback) => {
    Juridical.find({topic_id: id_topic}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  createCPB_CRT: (data, callback) => {
    new CPB_CRT(
      {
        name:data.name,
        CPB: data.cpb,
        CRT: data.crt,
        project_id: data.project_id,
        validity: data.validity
    }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },

  listAllCPB_CRTByProject: (id_project, callback) => {
    CPB_CRT.find({project_id: id_project}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
}

}

module.exports = mainController;
