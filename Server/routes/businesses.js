const express = require('express');
const Business = require('../../models/Business');
const router = express.Router();

router.get('/businesses', async (req, res) => {
    try {
        let businesses = await Business.find({});
        if (businesses.length === 0) {
            businesses = [{
                enterprisename: "Test",
                contactname: "Test",
                website: "Test",
                status: "Test",
                number: "1234456",
                email: "Test@Test.com",
                address: "Test"
            }];
        }
        res.status(200).json(businesses);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch businesses' });
    }
});

router.post('/businesses', async (req, res) => {
    try {
        const business = new Business(req.body);
        await business.save();
        res.status(201).json(business);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add business' });
    }
});

module.exports = router;
