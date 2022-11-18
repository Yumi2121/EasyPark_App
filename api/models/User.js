const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema here
const UserSchema = new Schema({
    email: {
        type: String,
		required: [true, 'Please add a email'],
        unique: true
    },
    password: {
        type: String,
		required: [true, 'Please add a password']
    },
    isAdmin: {
		type: Boolean,
		default: false,
	},
},{ timestamps: true });

module.exports = mongoose.model("User", UserSchema);