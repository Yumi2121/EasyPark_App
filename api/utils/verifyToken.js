const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT_key, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        // if token is correct
        req.user = user;
        next()
    });
};


// to verify user so only user or admin can edit the user acount
const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            if (err) return next(createError(403, "You are not authorized!"));
        }
    })
};

// to verify Admin 
const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            if (err) return next(createError(403, "You are not authorized!"));
        }
    })
};

module.exports = {verifyToken, verifyUser, verifyAdmin};