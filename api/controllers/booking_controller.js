const Booking = require('../models/Booking');


const createBooking = async (req,res,next) => {
    console.log("booking req", req);
    const newBooking = new Booking(req.body);

    try {
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);
    } catch(err) {
        next(err);
    }
};

const updateBooking = async (req,res,next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }       // after the update will create a updated version as a result
            );
        res.status(200).json(updatedBooking)
    }catch(err) {
        next(err);
    }
};

const deleteBooking = async (req,res,next) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json("Booking has been deleted.")
    }catch(err) {
        next(err);
    }
};

const getBooking = async (req,res,next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
    }catch(err) {
        next(err);
    }
};

const getBookings = async (req,res,next) => {
    try {
        const bookings = await Booking.find(req.body);
        res.status(200).json(bookings);
    }catch(err) {
        next(err);
    }
};



module.exports = {
    createBooking,
    updateBooking,
    deleteBooking,
    getBooking,
    getBookings
};