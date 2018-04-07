let Item = require('../models/item');

const mainController = {

  createItem: (data, callback) => {
    new Item(
      {
        name:data.name,
        management_id:data.management_id,
        end_date :data.end_date,
        start_date: data.start_date,
        project_id: data.project_id,
        percentage: "red"

    }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },
  
  listAllItensByManagement: (id_management, callback) => {
    Item.find({management_id: id_management}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  listAllItensByProject: (id_project, callback) => {
    Item.find({project_id: id_project}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  addPercentage: (data, callback) => {
    Item.findOneAndUpdate({_id: data.id}, {$set:{percentage: data.percentage}}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },
}

module.exports = mainController;
