const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Carpark schema here
const CarparkSchema = new Schema({
    carpark_name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    lat: {
        type: Number,
        require: true 
    },
    lng: {
        type: Number,
        require: true 
    },
    price: {
        type: Number,
        require: true
    }, 
    rating: {
		type: Number,
		min: 0,
        max: 5
    }
})

CarparkSchema.index({ "location": "2dsphere" });

module.exports = mongoose.model("Carpark", CarparkSchema);