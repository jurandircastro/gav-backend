let Audio = require('../models/audio');

const AudioController = {

  newAudio: (data, callback) => {
    new Audio(
      {
        name: data.audio_name,
        path: data.audio_path,
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

  listAllAudiosByProjectId: (project_id, callback) => {
    Audio.find({ "project_id":project_id }, function(err, obj) {
       if (err == null){
          callback(obj);
       }else{
          callback(err);
        }
    });
  },

  deleteAudio: (data, callback) => {
    Audio.findOneAndRemove({ "name":data.name }, function(err, obj) {
        if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  },

  setPath: (data, callback) => {
    Audio.findByIdAndUpdate(data.audio_id._id , {$set: { path: data.audio_path }}, function(err, obj) {
       if (err == null){
          callback(obj);
        }else{
          callback(err);
        }
    });
  }

}

module.exports = AudioController;
