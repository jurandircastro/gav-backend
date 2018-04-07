let Video = require('../models/video');

const VideoController = {

  newVideo: (data, callback) => {
    new Video(
      {
        name: data.video_name,
        path: data.video_path,
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

  listAllVideosByProjectId: (project_id, callback) => {
    Video.find({ "project_id":project_id }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

 deleteVideo: (data, callback) => {
   Video.findOneAndRemove({ "name":data.name }, function(err, obj) {
        if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

  setPath: (data, callback) => {
    Video.findByIdAndUpdate(data.video_id._id , {$set: { path: data.video_path } }, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  }

}

module.exports = VideoController;
