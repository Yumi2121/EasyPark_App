const { Router } = require('express');
const express = require('express');
const router = express.Router();


const { createBooking, updateBooking, deleteBooking, getBooking, getBookings} = require('../controllers/booking_controller');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');


// create bookings
router.post("/", createBooking);

// update booking
router.put("/:id", updateBooking);

// delete
router.delete("/:id", deleteBooking);

// read the selected booking
router.get("/:id", getBooking);

// read all bookings
router.get("/", verifyAdmin, getBookings);

module.exports = router;