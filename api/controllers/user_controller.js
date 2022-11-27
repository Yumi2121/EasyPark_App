const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
require('dotenv').config()

// user register
// POST /api/users/register
// public
const register = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password ) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
    res.status(500)
    throw new Error("User already exists")
    }

    // Hash passowrd
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            email: user.email,
            token: await generateToken(user._id),
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
});


//user login and then get the token
// POST /api/user/login
// public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            email: user.email,
            token: await generateToken(user._id),
            isAdmin: user.isAdmin,
        });
        res.status(200)
    }else {
        res.status(401)
        throw new Error("Invalid credentials")
    }
})


// Get user data
// GET /api/users/myProfile
// private
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
        });
        res.status(200)
    } else {
        res.status(404);
        throw new Error("User is not exist!")
    }
});

// update user 
// PUT /api/users/
// current login user
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
  
    if (user) {
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        token: generateToken(updateUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User is not existed!");
    }
  });

//generate JWT
const generateToken = async (id) => {
  try {
    console.log(process.env.JWT_KEY);
    const token = await jwt.sign( {id }, process.env.JWT_KEY, {
        expiresIn: '30d',
        // algorithm: 'none',
    });
    console.log('1111111111');
    console.log(token);
    console.log('2222222222');
    return token;
  } catch (error) {
      throw error;
  }
};

// admin only function ------------------------------------------------------

//get all users
// GET  /api/users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// delete user
// DELETE  /api/uses/:id
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user && user.isAdmin !== true) {
      await user.remove();
      res.status(200);
      res.json({ message: "User removed successfully!" });
    } else {
      res.status(404);
      throw new Error("User is not existed!");
    }
  });



    // try {
    //     const user = await User.findOne({ email: req.body.email });
    //     if(!user) return next(createError(404, "User not found!"))

    //     const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    //     if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"))

    //     const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_key);

    //     // destructer the user, so will not display passowrd and isAdmin
    //     const {password, isAdmin, ...otherDetails } = user._doc;
    //     res
    //     .cookie("access_token", token, {
    //         httpOnly: true,    // so doesn't allow client reach this cookie
    //     })
    //     .status(200)
    //     .json({ details: {...otherDetails}, isAdmin });
    // } catch(err) {
    //     res.status(500).send({...err, message: err.message});
    // }


module.exports = { register, login, getUser, updateUser, getAllUsers, deleteUser };