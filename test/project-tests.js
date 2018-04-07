let express = require('../config/express')();
let request = require('supertest')(express);
let Usuario = require('../app/models/project');

describe('Project tests' , function(){
  this.timeout(5000);

  it('Como QUALQUER TIPO DE USUÁRIO, devo poder VER TODOS OS PROJETOS DE QUE PARTICIPO.', function(done){
    request.get('/list_projects_by_user/:userId')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

});
