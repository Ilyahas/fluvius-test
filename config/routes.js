const auth = require('../api/routes/auth');
const events = require('../api/routes/events');

module.exports = (app) => {
    app.use('/auth', auth);
    app.use('/events', events);
    app.use((req, res, next) => {
       const error = new Error('Not found');
       error.status = 404;
       next(error);
    });
    app.use((error, req, res, next) => {
       res.status(error.status || 500);
       res.json({
          error: { message: error.message }
       });
    });
    app.use('/events', events);
};