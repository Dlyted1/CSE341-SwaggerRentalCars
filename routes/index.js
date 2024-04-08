const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/', (req, res) => { res.send('Hello World'); });

router.use('/', require('./swagger'));
router.use('/cars', require('./cars'));
router.use('/employees', require('./employees'));
router.use('/renters', require('./renters'));
router.use('/rentals', require('./rentals'));
router.use('/stores', require('./stores'));

router.get('/login', passport.authenticate('github'), (req, res) => { });

router.get('/logout', function (req, res, next) {
    req.logout(); // This removes the req.user property
    res.redirect('/'); // Redirect to the home page or any other page after logout
});


module.exports = router;
