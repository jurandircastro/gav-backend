let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let videoSchema = new Schema({
	name: String,
	path: String,
	project_id: String
});

module.exports = mongoose.model('Video', videoSchema);
