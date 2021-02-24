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
    });
});

//Detail/Show Route - GET /users/:id
router.get('/housewife/:id', (req, res) => {
    console.log(req.params);
    db.Housewife.findById(req.params.id, (err, db) => {
        if (err) {
            console.error(`🔥 Error in Housewife:id route:\n${err}`);
            return res.status(500).json({ error: 'Error in housewife:id route' });
        }
        res.json({ db });
    });
});

//http://localhost:3002/api/searchname?first_name=Charrisse
router.get('/SearchName', (req, res) => {
    db.Housewife.findOne({first_name: req.query.first_name}, (err, db) => {
        if (err) {
            console.error(`Error in searchCity route:\n${err}`);
            return res.status(500).json({ erro: `Error in searchCity route:\n${err}`});
        }
        res.json({ db });
    });
});
    

// http://localhost:3002/api/searchCity?city=Potomac
router.get('/searchCity', (req, res) => {
    db.Housewife.find({city: req.query.city}, (err, db) => {
        if (err) {
            console.error(`Error in searchCity route:\n${err}`);
            return res.status(500).json({ erro: `Error in searchCity route:\n${err}`});
        }
        res.json({ db });
    });
});

module.exports = router;