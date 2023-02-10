const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');
const gameEntryRoute = require('./gameEntryRoutes');


router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);
router.use('/gameEntry', gameEntryRoute);

module.exports = router;
