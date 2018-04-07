let Message = require('../models/message');
let User = require('../models/user');

function getUserMessage(id, text){
  let promise = new Promise(function (resolve, reject){
   User.findOne({_id:id}, function(err, obj) {
      if (err == null){
          resolve({"user":obj, "text":text});
      }else{
          reject(err);
      }
    });
  });
  return promise;
}

const mainController = {

  createMessage: (data, callback) => {
    new Message(
      {
        text: data.text,
	      user_id: data.user_id,
        communication_id: data.communication_id,
        date: data.date
      }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },
  
  listAllMessagesByCommunication: (id_communication, callback) => {
    Message.find({communication_id: id_communication}, function(err, obj) {
       if (err == null){
        let promise = [];
        for (let i = 0; i < obj.length; i++){
          promise.push(getUserMessage(obj[i].user_id, obj[i]));
        }
        Promise.all(promise).then(values => {
          callback(values);
        });
        }else{
          reject(err);
        }
    });
  },
}

module.exports = mainController;