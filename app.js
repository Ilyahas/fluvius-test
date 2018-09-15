const express = require('express');
const app = express();
const config = require('./config');

require('./config/express')(app);
require('./config/routes')(app);
require('./config/mongoose')();

app.listen(config.PORT, '0.0.0.0', () => console.log("App listening on port " + config.PORT + "!"));
