const mongoose = require('mongoose');
const Event = require('../models/Event');

function getEvents(req, res, next) {
    const perPage = 10,
        page = Math.max(0, req.param('page'));
    Event.find()
        .select('_id name date')
        .limit(perPage)
        .skip(perPage * page)
        .exec()
        .then(docs => {
            if(docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({ message: 'No Events' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

function getEventById(req, res, next) {
    const eventId = req.params.eventId;
    Event.findById(eventId)
        .select('_id name date')
        .exec()
        .then(doc => {
            console.log('[database]: ', doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({message: "No object found for provided id"});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

function addEvents(req, res, next) {
    const eventData = req.body;
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: eventData.name,
        date: eventData.date
    });
    event.save().then(result => {
        res.status(200).json({id: result._id});
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
}

function updateEventById(req, res, next) {
    const eventId = req.params.eventId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Event.update({ _id: eventId }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Event updated'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

function deleteEventById(req, res, next) {
    const eventId = req.params.eventId;
    Event.remove({ _id: eventId })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

module.exports = {
    getEvents,
    getEventById,
    addEvents,
    updateEventById,
    deleteEventById
};