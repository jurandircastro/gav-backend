let Group = require('../models/groups_user');
let User = require('../models/user');

function getAllUserInGroup(id){
  let promise = new Promise(function (resolve, reject){
    User.findOne({_id:id}, function(err, data) {
      if(err == null)
        resolve(data);
      else
        reject(err);
    });
  });
  return promise
}

function getAllGroupsAndUser(group_id){
  let promise = new Promise(function (resolve, reject){
    Group.findOne({_id: group_id}, function(err, obj) {
        if (err == null){
        let promise = [];
        for (let i = 0; i < obj.users_ids.length; i++){
          promise.push(getAllUserInGroup(obj.users_ids[i]));
        }
        Promise.all(promise).then(values => {
          resolve({"users":values, "group": {id:obj._id, name:obj.name}});
        });
        }else{
          reject(err);
        }
      });
  });
  return promise;
}


const mainController = {

 createGroup: (data, callback) => {
    new Group(
      {
        name: data.name,
        admin_id: data.admin_id,
        project_id: data.project_id,
        users_ids: data.users_ids
   }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

     }else{
        callback({erroq: err});
      }
    });
  },


 editGroup: (data, callback) => {
    Group.findOneAndUpdate({_id: data.group_id}, { $set:
      {
        name: data.groupUpdate.name
      }
    }, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },


 listAllGroupsByProject: (id_project, callback) => {
    Group.find({project_id: id_project}, function(err, obj) {
      if (err == null){
         let promise = [];
          for (let i = 0; i < obj.length; i++){
            promise.push(getAllGroupsAndUser(obj[i]._id));
          }
          Promise.all(promise).then(values => {
              callback(values);
          });
      }else{
        callback(err);
      }
    });
 },

 searchGroup: (group_id, callback) => {
    Group.findOne({_id: group_id}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  searchUsersByGroup: (group_id, callback) => {
    Group.findOne({_id: group_id}, function(err, obj) {
      if (err == null){
      let promise = [];
      for (let i = 0; i < obj.users_ids.length; i++){
        promise.push(getAllUserInGroup(obj.users_ids[i]));
      }
      Promise.all(promise).then(values => {
          callback(values);
      });
      }else{
        callback(err);
      }
    });
  },

  deleteGroup: (data, callback) => {
    Group.findOneAndRemove({_id: data.group_id},function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  addUserToGroup: (data, callback) => {
    Group.findOneAndUpdate({_id: data.group_id}, {$push :{users_ids : data.user_id}}, function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },
}

module.exports = mainController;
