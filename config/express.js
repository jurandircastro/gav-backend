let load = require('express-load'),
   expressValidator = require('express-validator'),
   cors = require('cors'),
   express = require('express'),
   app = express(),
   bodyParser = require('body-parser');
   mongoose = require('mongoose'),
   morgan = require('morgan'),
   config = require('./config'),
   multipart = require('connect-multiparty'),
   usuario = require('./../app/models/user');

module.exports = function() {

    mongoose.connect('mongodb://mongodb120173-gav-backend.jelasticlw.com.br/', function(err) {
      if (err) mongoose.connect('mongodb://localhost:27017/');
    });

    app.use(multipart({
          uploadDir: './app/public'
    }));

    app.use(cors());
    app.use(express.static('./app/public'));
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use(morgan('dev'));
    app.set('superSecret', config.secret);

    load('routes', {cwd : 'app'})
      .into(app);

    return app;
}
