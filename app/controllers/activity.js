let Activity = require('../models/activity');
let Group = require('../models/groups_user');
let User = require('../models/user');

function getAllUserInGroup(id){
  let promise = new Promise(function (resolve, reject){
    User.findOne({_id:id}, function(err, data) {
      if(err == null){
        resolve(data);
      }else{
       reject(err); 
      }
    });
  });
  return promise
}

function getAllIGroupsInActivity(activity){
   let promise = new Promise(function (resolve, reject){
    Group.findOne({_id: activity.group_id}, function(err, obj) {
        if (err == null){
        let promise = [];
        if (obj.users_ids == null){
          resolve({"activity":activity, "users":null, "group": {id:obj._id, name:obj.name}});
        }
        for (let i = 0; i < obj.users_ids.length; i++){
          promise.push(getAllUserInGroup(obj.users_ids[i]));
        }
        Promise.all(promise).then(values => {
          resolve({"activity":activity, "users":values, "group": {id:obj._id, name:obj.name}});
        });
        }else{
          reject(err);
        }
      });
  });
  return promise;
}

const mainController = {

  createActivity: (data, callback) => {
    new Activity(
      {
        name:data.name,
        item_id:data.item_id,
        end_day : data.end_day,
        start_day: data.start_day,
        done: false
    }
  ).save(function(err, obj){
      if (err == null){
        callback(obj);

      }else{
        callback({erroq: err});
      }
    });
  },
  
  listAllActivitysByItem: (id_item, callback) => {
    Activity.find({item_id: id_item}, function(err, obj) {
       if (err == null){
          let promise = [];
          for (let i = 0; i < obj.length; i++){
             promise.push(getAllIGroupsInActivity(obj[i]));
          }
          Promise.all(promise).then(values => {
          callback(values);
          });
      }else{
          callback(err);
      }
    });
  },

  changeDone:(data, callback) => {
    Activity.findOneAndUpdate({_id: data.activity_id}, {$set:{done: data.done}}, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  addGroupToActivity:(data, callback) => {
    Activity.findOneAndUpdate({_id: data.activity_id}, {$set:{group_id: data.group_id}}, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  }
}

module.exports = mainController;
