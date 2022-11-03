const { Router } = require('express');
const express = require('express');
const Carpark = require('../models/Carpark');
const { verifyAdmin } = require('../utils/verifyToken');

const router = express.Router();



// create
router.post("/", async (req, res)=> {

    const newCarpark = new Carpark(req.body)

    try {
        const saveCarpark = await newCarpark.save()
        res.status(200).json(saveCarpark)
    }catch(err) {
        res.status(500).json(err)
    }
}, verifyAdmin)

// update
router.put("/", async (req, res)=> {
    try {
        const Carpark = await newCarpark.save()
        res.status(200).json(saveCarpark)
    }catch(err) {
        res.status(500).json(err)
    }
}, verifyAdmin)

// delete

// get

// get all


module.exports = router;