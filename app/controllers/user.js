let User = require('../models/user');
let jwt  = require('jsonwebtoken');
let app =  require('../../config/express');
let bcrypt = require("bcrypt-nodejs");

const mainController = {

  createUser: (data, callback) => {
      let hash = bcrypt.hashSync(data.password);
      new User(
        {
         "name":data.name,
         "login": data.login,
         "password": hash,
         "email":data.email,
         "image_path": data.image_path,
         "admin": data.admin
        }
      ).save(function(err, obj){
          if (err == null){
              callback(obj);
          }else{
              callback(err);
          }
      });
  },

  searchUser: (user_id, callback) => {
    User.findOne({_id:user_id}, function(err, obj) {
      if (err == null){
          callback(obj);
      }else{
          callback(err);
      }
    });
  },

  listAllUsers: (callback) => {
    User.find(function(err, obj) {
        if (err == null){
            callback(obj);
        }else{
            callback(err);
        }
    });
  },

  editUser: (data, callback) => {
    User.findByIdAndUpdate(data.user_id , {$set: { image_path: data.image_path } }, function(err, obj) {
        if (err == null){
            callback(obj);
        }else{
            callback(err);
        }
    });
  },

  authenticateUser: (user, callback) => {

    User.findOne({login: user.login}, function(err, data) {
      if (err) throw err;

      if (!data){
        callback({success: false, message: 'User não encontrado'});
      }else if (!bcrypt.compareSync(user.password, data.password)){
        callback({ success: false, message: 'Senha inválida' });
      }else{
        let token = jwt.sign(data, 'superSecret', {expiresIn : 60*60*24 });
        callback(
          {
            success: true,
            message: 'Autenticação válida',
            User: data,
            token: token
          });
      }
    });
  },
}

module.exports = mainController;
