const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');
const User = require('../models/User')
const asyncHandler = require('express-async-handler');

// to verify user with correct token
const verifyUser = asyncHandler(async (req, res, next) => {
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(' ')[1]
  
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_KEY)
  
        // Get user from the token
        req.user = await User.findById(decoded.id).select('-password')
  
        next()
      } catch (error) {
        console.log(error)
        res.status(501)
        throw new Error('Not authorized as token is invalid!')
      }
    }
  
    if (!token) {
      res.status(401)
      throw new Error('Not authorized! No token provided!')
    }
  })

// to verify Admin 
const verifyAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("You are not authorized!");
  }
});


module.exports = {verifyUser, verifyAdmin};