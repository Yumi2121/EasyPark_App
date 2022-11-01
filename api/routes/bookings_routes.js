const { Router } = require('express');
const express = require('express');
const Booking = require('../models/Booking');
const { createError } = require('../utils/error');
const { createBooking } = require('../controllers/booking_controller');

const router = express.Router();

// create bookings
router.post("/", createBooking);

// update bookings
router.put("/", async (req, res)=> {
    try {
        const updateBooking = await Booking.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }       // after the update will create a updated version as a result
            );
        res.status(200).json(updateBooking)
    }catch(err) {
        res.status(500).json(err)
    }
})

// delete


// get


// get all
router.get("/", async (req, res, next)=> {
    // const failed = true;

    // if (failed) return next(createError(401, " You are nit authenticated!"))
    try {
        const Bookings = await Booking.find();
        res.status(200).json(Bookings)
    }catch(err) {
        next(err);
    }
})

module.exports = router;