const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema here
const UserSchema = new Schema({
    username: {
        type: String,
		required: true,
        unique: true
    },
    email: {
        type: String,
		required: true,
        unique: true
    },
    password: {
        type: String,
		required: true,
        unique: true
    },
    isAdmin: {
		type: Boolean,
		default: false,
	},
},
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);