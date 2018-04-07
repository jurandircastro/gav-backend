let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let juridical_schema = new Schema({
	name: String,
	topic_id: String,
  file_path: String,
	type: String,
    observations: String,
    status: String,
    alarm: {data:String, horary: String}

});

module.exports = mongoose.model('Juridico', juridical_schema);
