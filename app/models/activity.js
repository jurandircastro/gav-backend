let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let activity_schema = new Schema({
	name: String,
	item_id: String,
	start_day: String,
    end_day: String,
    done: Boolean,
    group_id: String

});

module.exports = mongoose.model('Atividade', activity_schema);
