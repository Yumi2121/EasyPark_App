const express = require('express');
const mongoose = require('mongoose');
// import middleware
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken')
// import routes
const authRouter = require('./routes/auth_routes');
const usersRouter = require('./routes/users_routes');
const bookingsRouter = require('./routes/bookings_routes');
const carparksRouter = require('./routes/carparks_routes');
const port= process.env.PORT || 8000;




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

function authenticationMiddleware(req, res, next) {
    const token = req.cookies["access_token"]

    jwt.verify(token, process.env.JWT_key, (err, decoded) => {
        if(!err){
            req.userId = decoded.id
            req.isAdmin = decoded.isAdmin
        }
        next()
    })
}

// middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(authenticationMiddleware)
// app.use(express.json());

app.use(morgan("[:date[iso]] Started :method :url for :remote-addr", { immediate: true }))
app.use(morgan("[:date[iso]] Completed :status in :response-time ms"))

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


app.listen(port, () => {
    connect()
    console.log("EasyPark connected to backend.")
    console.log(`Server is running on port: ${port}`);
})