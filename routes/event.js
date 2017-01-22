var express = require('express');
var router = express.Router();

var Event = require('../models/event-model');

router.get('/getEvents', function(req, res) {
    Event.find({})
    .then(function(data) {
        res.status(200).send(data);
    })
})

router.post('createEvent', function(req, res) {
    var event = new Event({
        name: req.body.name,
        userResponsible: req.body.userResponsible,
    })
    event.save(function(err, data) {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
})



module.exports = router;