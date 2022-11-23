const { Router } = require('express');
const express = require('express');
const { verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

const { createCarpark, updateCarpark, getCarpark, deleteCarpark, getCarparks} = require('../controllers/carpark_controller');


// create
router.post("/", createCarpark);

// update
router.put("/:id", updateCarpark);

// delete
router.delete("/:id", deleteCarpark);

// get
router.get("/:id", getCarpark);

// get all
router.get("/", getCarparks);

module.exports = router;