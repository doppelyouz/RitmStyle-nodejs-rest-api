const express = require('express')
const router = express.Router();

const User = require('../models/User');

router.post('/enroll', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    try {
        await user.save();
    } catch(e) {
        console.log(e);
    }
})

module.exports = router;