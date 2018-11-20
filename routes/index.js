const express = require('express');
const router = express.Router();

require('./store.routes')(router);
require('./user.routes')(router);

module.exports = router;
