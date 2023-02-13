const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');
const gameEntryRoute = require('./gameRoute');


router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);
router.use('/game', gameEntryRoute);

module.exports = router;