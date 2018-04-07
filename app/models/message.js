let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let messageSchema = new Schema({
	text: String,
	user_id: String,
	communication_id: String,
	date: String

});

module.exports = mongoose.model('Mensagens', messageSchema);
