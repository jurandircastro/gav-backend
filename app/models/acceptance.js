let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let acceptanceSchema = new Schema({
	name: String,
	path: String,
	project_id: String
});

module.exports = mongoose.model('Acceptance', acceptanceSchema);
