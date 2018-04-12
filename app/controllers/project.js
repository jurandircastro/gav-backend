"use strict";

let Project = require('../models/project');
let fs = require('fs');
let atob = require('atob');

const mainController = {

  createProject: (data, callback) => {
    let imageBase64 = data.image_path;
    let bin = atob(imageBase64);
    let urlImageSave = "./app/public/"+ data.name + ".jpg";
    fs.writeFile(urlImageSave, bin, "binary", function(err) {
      if (err){
        console.log(err);
      }
      new Project(
        {
        "name": data.name,
        "producer_name": data.producer_name,
        "description": data.description,
        "start_date": data.start_date,
        "end_date": data.end_date,
        "image_path": "/public/"+ data.name + ".jpg",
        "admin_id": data.admin_id
      }
    ).save(function(err, obj){
        if (err == null){
          callback(obj);
        }else{
          callback({erroq: err});
        }
      });
    });
  },

  searchProject: (data, callback) => {
     Project.find({"_id" :data._id}, function(err, obj) {
        callback(obj);
    });
  },

  editProject: (data, callback) => {
    Project.findOneAndUpdate({ "_id": data.project_id},
    { $set:
      {
          "name": data.project_update.name,
          "producer_name": data.project_update.producer_name,
          "description": data.project_update.description,
          "start_date": data.project_update.start_date,
          "end_date": data.project_update.end_date,
          "image_path": data.project_update.image_path
      }
    }, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  editImageProject: (data, callback) => {
    Project.findOneAndUpdate({ "_id": data.project_id},
    { $set:
      {
          "image_path": data.project_update.image_path
      }
    }, function(err, obj){
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  listAllProjects: (callback) => {
    Project.find(function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },

  deleteProject: (data, callback) => {
    Project.findOneAndRemove({_id: data._id},function(err, obj) {
      if (err == null){
        callback(obj);
      }else{
        callback(err);
      }
    });
  },
}

module.exports = mainController;
