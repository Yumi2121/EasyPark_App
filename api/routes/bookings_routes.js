const { Router } = require('express');
const express = require('express');
const router = express.Router();


const { createBooking, updateBooking, deleteBooking, getBooking, getBookings} = require('../controllers/booking_controller');
const { verifyUser, verifyAdmin } = require('../utils/verifyToken');


// create bookings
router.post("/", verifyUser, createBooking);

// update booking
router.put("/:id", verifyUser, updateBooking);

// delete
router.delete("/:id", verifyUser, deleteBooking);

// read the selected booking
router.get("/:id", verifyUser, getBooking);

// read all bookings
router.get("/", verifyAdmin, getBookings);

module.exports = router;