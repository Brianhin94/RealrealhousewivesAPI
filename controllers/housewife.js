const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/housewife', (req, res) => {
    console.log(db);
    db.Housewife.find({}, (err, housewives) => {
        if (err) {
            console.error(`🔥 Error in Housewife route:\n${err}`);
            res.status(500).json({ error: 'Error in housewife route' });
        }
        res.json({ housewives })
        // .then((response) => {
        //     res.json(response)
    })
});

// Detail/Show Route - GET /users/:id
router.get('/housewife/:id', (req, res) => {
    console.log(req.params);
    db.findById(req.params.id, (err, db) => {
        if (err) {
            console.error(`🔥 Error in Housewife:id route:\n${err}`);
            return res.status(500).json({ error: 'Error in housewife:id route' });
        }
        res.json({ db });
    });
});

module.exports = router;