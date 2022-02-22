const router = require('express').Router();
const TestController = require('@controllers/teste');

router.get('/', TestController.home);

module.exports = router