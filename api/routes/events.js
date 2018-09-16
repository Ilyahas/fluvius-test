const express = require('express');
const eventsController = require('../controllers/eventsController');
const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

router.get('/page/:page', checkAuth, eventsController.getEvents);

router.get('/:eventId', checkAuth, eventsController.getEventById);

router.post('/', checkAuth, eventsController.addEvents);

router.patch('/:eventId', checkAuth, eventsController.updateEventById);

router.delete('/:eventId', checkAuth, eventsController.deleteEventById);

module.exports = router;