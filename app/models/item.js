let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let item_schema = new Schema({
	name: String,
	management_id: String,
	end_date: String,
	start_date: String,
	project_id: String,
	percentage: String



});

module.exports = mongoose.model('Item', item_schema);
