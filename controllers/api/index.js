const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');
const gameEntryRoute = require('./gameRoute');
const userRoute = require('./userRoute')


router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);
router.use('/game', gameEntryRoute);
router.use('/user', userRoute);

module.exports = router;