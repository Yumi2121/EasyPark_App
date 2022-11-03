const { Router } = require('express');
const express = require('express');
const { updateUser, deleteUser, getUser, getUsers } = require('../controllers/user_controller');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');

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


// update users
router.put("/:id", verifyUser, updateUser);

// delete
router.delete("/:id", verifyUser, deleteUser);

// get one user
router.get("/:id", verifyUser, getUser);

// read all users
router.get("/", verifyAdmin, getUsers);


module.exports = router;