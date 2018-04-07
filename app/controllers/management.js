let Management = require('../models/management');
let Item = require('../models/item');

function getAllItensInManagement(management){
  let promise = new Promise(function (resolve, reject){
    Item.find({management_id: management._id}, function(err, data) {
      if(err == null)
        resolve({management:management, itens:data});
      else
        reject(err);
    });
  });
  return promise
}

const mainController = {

  createManagement: (data, callback) => {
    new Management(
      {
        name:data.name,
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

  listAllManagementByProject: (id_project, callback) => {
      Management.find({project_id: id_project}, function(err, obj) {
      if (err == null){
         let promise = [];
          for (let i = 0; i < obj.length; i++){
            promise.push(getAllItensInManagement(obj[i]));
          }
          Promise.all(promise).then(values => {
              callback(values);
          });
      }else{
        callback(err);
      }
    });
  },
}

module.exports = mainController;
