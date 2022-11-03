const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Booking schema here
const BookingSchema = new Schema({
    carpark_name: {
      type: String,
		  required: true,
    },
    booking_date: {
      type: Date,
      required: true,
	  },
    unavailableDates: {
      type: [Date]
	  }
});

module.exports = mongoose.model("Booking", BookingSchema);