let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let audioSchema = new Schema({
	name: String,
	path: String,
	project_id: String
});

module.exports = mongoose.model('Audio', audioSchema);
