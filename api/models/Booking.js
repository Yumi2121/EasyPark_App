const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Booking schema here
const Booking = new Schema({
    username: {
        type: String,
		required: true,
    },
    username: {
        type: String,
		required: true,
    },
    create_date: {
		type: Date,
		required: true,
	},
	modified_date: {
		type: Date,
		required: true,
	},
});