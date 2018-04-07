let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let management_schema = new Schema({
	name: String,
    project_id: String
});

module.exports = mongoose.model('Gestao', management_schema);
