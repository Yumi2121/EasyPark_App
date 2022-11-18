const Carpark = require('../models/Carpark')

const createCarpark = async (req,res,next) => {
    console.log("booking req", req);
    const newCarpark = new Carpark(req.body);

    try {
        const savedCarpark = await newCarpark.save();
        res.status(200).json(savedCarpark);
    } catch(err) {
        next(err);
    }
};

const updateCarpark = async (req,res,next) => {
    try {
        const updatedCarpark = await Carpark.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }       // after the update will create a updated version as a result
            );
        res.status(200).json(updatedCarpark)
    }catch(err) {
        next(err);
    }
};

const deleteCarpark = async (req,res,next) => {
    try {
        await Carpark.findByIdAndDelete(req.params.id);
        res.status(200).json("Carpark has been deleted.")
    }catch(err) {
        next(err);
    }
};

const getCarpark = async (req,res,next) => {
    try {
        const carpark = await Carpark.findById(req.params.id);
        res.status(200).json(carpark);
    }catch(err) {
        next(err);
    }
};

const getCarparks = async (req,res,next) => {
    try {
        const carparks = await Booking.find(req.body);
        // const bookings = await Booking.find(req.query);
        res.status(200).json(carparks);
    }catch(err) {
        next(err);
    }
};



module.exports = {
    createCarpark,
    updateCarpark,
    deleteCarpark,
    getCarpark,
    getCarparks
};