let express = require('../config/express')();
let request = require('supertest')(express);
let Usuario = require('../app/models/user');

describe('User tests' , function(){
  this.timeout(5000);

  it('Como USUÁRIO NÃO CADASTRADO, devo poder ME CADASTRAR.', function(done){
    request.post('/new_user')
    .set('Accept', 'application/json')
    .send(
      {
        "user":
        {
          "name":"Tvmanager",
          "last_name":"Beta",
          "avatar":"https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png",
          "login":"tvmanager",
          "email": "tvmanager@tvmanager.com.br",
          "password":"tvmanager@123"
        }
    })
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

});
