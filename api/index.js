const express = require('express');
const mongoose = require('mongoose');
// import routes
const authRouter = require('./routes/auth_routes');
const usersRouter = require('./routes/users_routes');
const bookingsRouter = require('./routes/bookings_routes');
const carparksRouter = require('./routes/carparks_routes');



const app = express();
// to make sure our MongoDB data can be read in env file
require('dotenv').config()

// connect MongoDB
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
});

// middlewares
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/carparks', carparksRouter);


app.listen(8800, () => {
    connect()
    console.log("EasyPark connected to backend.")
})