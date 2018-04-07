let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

let CPB_CRT_schema = new Schema({
	name: String,
	CPB: String,
    CRT: String,
    project_id: String,
    validity: String

});

module.exports = mongoose.model('CPB_CRT', CPB_CRT_schema);
