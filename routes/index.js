const express = require('express');
const router = express.Router();

require('./store.routes')(router);

module.exports = router;
