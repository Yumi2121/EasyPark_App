const { User } = require('../models/User');


const updateUser = async (req,res,next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }       // after the update will create a updated version as a result
            );
        res.status(200).json(updatedUser)
    }catch(err) {
        next(err);
    }
};

const deleteUser = async (req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.")
    }catch(err) {
        next(err);
    }
};

const getUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err) {
        next(err);
    }
};

const getUsers = async (req,res,next) => {
    try {
        const users = await User.find(req.body);
        res.status(200).json(users);
    }catch(err) {
        next(err);
    }
};



module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers
};