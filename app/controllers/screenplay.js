let Screenplay = require('../models/screenplay');

const ScreenplayController = {

  newScreenplay: (data, callback) => {
    new Screenplay(
      {
        name: data.screenplay_name,
        path: data.screenplay_path,
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

  listAllScreenplaysByProjectId: (project_id, callback) => {
    Screenplay.find({ "project_id":project_id }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

  setPath: (data, callback) => {
    Screenplay.findByIdAndUpdate(data.screenplay_id._id , {$set: { path: data.screenplay_path } }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

  deleteScreenPlay: (data, callback) => {
    Screenplay.findOneAndRemove({ "name":data.name }, function(err, obj) {
        if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

}

module.exports = ScreenplayController;
