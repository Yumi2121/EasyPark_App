const { Router } = require('express');
const express = require('express');
const { register, login, updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/user_controller');
const { verifyUser, verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are loged in.")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are loged in and you can delete your acount.")
// });

// router.get("/checkuser/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are loged in and you can delete any acounts.")
// });

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