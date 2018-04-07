let mongoose = require('mongoose'),
   Schema = mongoose.Schema;

 let validateEmail = function(email) {
     let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     return regex.test(email)
 };

let usuarioSchema = new Schema({
    admin: { type: Boolean },
    name:  { type: String, required: true },
    login: {
      type: String,
      required: true,
      index:true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    image_path: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);
