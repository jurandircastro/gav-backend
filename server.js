let app = require('./config/express')();
let http = require('http').Server(app);

let url = process.env.NODE_PORT || 3000

http.listen(url);
