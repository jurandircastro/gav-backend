let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let groups_userSchema = new Schema({
	name: String,
	admin_id: String,
	project_id: String,
	users_ids:[String]

});

module.exports = mongoose.model('Grupos', groups_userSchema);
