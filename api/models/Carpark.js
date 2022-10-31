const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Carpark schema here
const Carpark = new Schema({
    carpark_name: {
        type: String,
        require: true
    },
    adress: {
        type: String,
        require: true
    },
    location: {
        type: "point",
        require: true
    },
    photos: {
        type: [String]
    },
    desc: {
        type: String,
        require: true
    }

})