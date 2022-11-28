const { Router } = require('express');
const express = require('express');
const { register, login, updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/user_controller');
const { verifyUser, verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// user register
router.post("/register", register);
// user login
router.post("/login", login);

//get all users
router.get("/", verifyUser, verifyAdmin, getAllUsers);
// delete
router.delete("/:id", verifyUser, verifyAdmin, deleteUser);


router
    .route("/myProfile")
    .get(verifyUser, getUser)
    .put(verifyUser, updateUser)

module.exports = router;