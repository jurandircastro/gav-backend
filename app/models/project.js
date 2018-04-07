let mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

let projetoSchema = new Schema({
    name: String,
    producer_name: String,
	description: String,
	start_date: String,
	end_date: String,
	image_path: String,
	admin_id: String

});

module.exports = mongoose.model('Projeto', projetoSchema);
