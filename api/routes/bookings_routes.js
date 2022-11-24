const { Router } = require('express');
const express = require('express');
const router = express.Router();

const {  createBooking, updateBooking, deleteBookingById, getBookings, getBookingById, getBookingByUserId } = require('../controllers/booking_controller');
const { verifyUser, verifyAdmin } = require('../middleware/authMiddleware');


// read all bookings with all users
router.get("/", verifyUser, verifyAdmin, getBookings);

// create bookings
router.post("/", verifyUser, createBooking);

// update booking
router.put("/:id", verifyUser, updateBooking);

// read the selected booking
router.get("/:id", verifyUser, getBookingById);
// delete
router.delete("/:id", verifyUser, deleteBookingById);


// read all bookings with all users
router.get("/all", verifyAdmin, getBookings);

// get all bookings under specific user
router.get("/user/:userId", verifyUser, getBookingByUserId);

module.exports = router;