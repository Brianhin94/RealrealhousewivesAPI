const express = require('express');
const db = require('../models/housewife');
const router = express.Router();

router.get('/housewife', (req, res) => {
    db.find({}, (err, db) => {
        if (err) {
            console.error(`🔥 Error in users Index route:\n${err}`);
            return res.status(500).json({ error: 'Error in housewife route' });
        }
    })
    .then((response) => {
        res.json( response )
    })
});

// Detail/Show Route - GET /users/:id
router.get('/housewife/:id', (req, res) => {
    console.log(req.params);
    db.findById(req.params.id, (err, db) => {
        if (err) {
            console.error(`🔥 Error in users Detail route:\n${err}`);
            return res.status(500).json({ error: 'Error in housewife:id route' });
        }
        res.json({ db });
    });
});

module.exports = router;