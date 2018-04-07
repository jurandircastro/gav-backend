let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let screenplaySchema = new Schema({
	name: String,
	path: String,
	project_id: String
});

module.exports = mongoose.model('Screenplay', screenplaySchema);
