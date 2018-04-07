let Topic = require('../models/topic');

const mainController = {

  createTopic: (data, callback) => {
    new Topic(
      {
        name:data.name,
        project_id: data.project_id,
        itens_ids: []
    }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },

  listAllTopicslByProject: (id_project, callback) => {
    Topic.find({project_id: id_project}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },
}

module.exports = mainController;
