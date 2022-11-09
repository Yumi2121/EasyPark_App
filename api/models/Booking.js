const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Booking schema here
const BookingSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
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
},
{
  timestamps: true,
});

module.exports = mongoose.model("Booking", BookingSchema);