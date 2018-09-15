const express = require('express');
const eventsController = require('../controllers/eventsController');

const router = express.Router();

router.get('/', eventsController.getEvents);

router.get('/:eventId', eventsController.getEventById);

router.post('/', eventsController.addEvents);

router.patch('/:eventId', eventsController.updateEventById);

router.delete('/:eventId', eventsController.deleteEventById);

module.exports = router;