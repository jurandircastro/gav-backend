let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let topic_schema = new Schema({
	name: String,
	itens_ids:[String],
    project_id: String

});

module.exports = mongoose.model('Topico', topic_schema);
