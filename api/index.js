const express = require('express');
const mongoose = require('mongoose');
// import routes
const authRouter = require('./routes/auth_routes');
const usersRouter = require('./routes/users_routes');
const bookingsRouter = require('./routes/bookings_routes');
const carparksRouter = require('./routes/carparks_routes');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')



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
    console.log("mongoDB disconnected!!");
});

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/carparks', carparksRouter);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});


app.listen(8000, () => {
    connect()
    console.log("EasyPark connected to backend.")
})