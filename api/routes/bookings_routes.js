const { Router } = require('express');
const express = require('express');
const Booking = require('../models/Booking');
const { createError } = require('../utils/error');
const { createBooking, updateBooking, deleteBooking, getBooking, getBookings} = require('../controllers/booking_controller');

const router = express.Router();

// create bookings
router.post("/", createBooking);

// update booking
router.put("/:id", updateBooking);

// delete
router.delete("/:id", deleteBooking);

// read the selected booking
router.get("/:id", getBooking);

// read all bookings
router.get("/", getBookings);

module.exports = router;