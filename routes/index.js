const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => { res.send('Hello World'); });

router.use('/', require('./swagger'));
router.use('/cars', require('./cars'));
router.use('/employees', require('./employees'));
router.use('/renters', require('./renters'));
router.use('/stores', require('./stores'));

module.exports = router;