let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let communicationSchema = new Schema({
	name:String,
	groups_ids:[String],
	project_id:String,
	file_id: String
});

module.exports = mongoose.model('Comunicacao', communicationSchema);
