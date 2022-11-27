const Booking = require('../models/Booking');
const User = require('../models/User');

// used for simplify the syntax of promise error handling
const asyncHandler = require('express-async-handler')

//Get bookings
// GET /api/bookings
const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find( {} );
    if (bookings && bookings.length !== 0) {
      res.status(200).json(bookings);
    } else {
        res.status(404);
        throw new Error("No bookings found");
    }
});


// get bookings by bookingID
// Get /api/bookings/:id
const getBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
        res.status(200).json(booking);
    } else {
        res.status(404);
        throw new Error("No booking found");
    }
});


// create booking
// POST /api/bookings
// private
const createBooking = asyncHandler(async (req,res) => {
    const booking = new Booking ({
        carpark_name: req.body.carpark_name,
        user: req.user,
        start_booking_date: req.body.start_booking_date,
        end_booking_date: req.body.end_booking_date,
    })

    const newbooking = await booking.save();
        res.status(201).json(newbooking);
});


// update booking theb save 
// /api/bookings/:id
const updateBooking = asyncHandler(async (req,res) => {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
        res.status(400)
        throw new Error("Booking not found!")
    }

    // check for user
    if (!req.user) {
        res.status(401)
        throw new Error("User not found!")
    }
   
    // make sure the logged in user matches the booking user
    if ((booking.user.toString() !== req.user._id) || !req.user.isAdmin) {
        res.status(401)
        throw new Error("User not authorized!")
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id, 
        { $set: req.body },
        { new: true }       // after the update will create a updated version as a result
        );
    res.status(200).json(updatedBooking)
   
});

// DELETE api/bookings/:id
const deleteBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    // console.log(booking.user)
    // console.log(req.user._id)
    if (booking) {
      if (req.user._id.toString() === booking.user.toString() || req.user.isAdmin) {
        await booking.remove();
        res.status(200);
        res.json({ message: "Booking removed successfully!" });
      } else {
        res.status(401);
        throw new Error("You are not authorized to delete this booking!");
      }
    } else {
      res.status(404);
      throw new Error("Booking is not exist!");
    }
  });


// get booking by userID
// GET api/bookings/:userId
const getBookingByUserId = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.params.userId });
    if (bookings && bookings.length !== 0) {
      res.status(200).json(bookings);
    } else {
      res.status(404);
      throw new Error("No bookings found, make a booking now");
    }
  });



module.exports = {
    createBooking,
    updateBooking,
    deleteBookingById,
    getBookings,
    getBookingById,
    getBookingByUserId 
};