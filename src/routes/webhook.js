const { Router } = require('express');
const { dialogFlowHandler } = require('../controllers/webhook');
const { WEBHOOK_URL } = require('../config');

const router = Router();

router.post(WEBHOOK_URL, dialogFlowHandler);

module.exports = router;
