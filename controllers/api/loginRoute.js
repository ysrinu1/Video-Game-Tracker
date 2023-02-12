const router = require('express').Router();
const { Gamers } = require('../../models');

router.post('/', async (req, res) => {
  try {
    // Find gamer by username entered
    const gamerCheck = await Gamers.findOne({ where: {name:  req.body.name}});
  
    // Failure message on username/password being incorrect
    if (!gamerCheck) {
      res.status(400).json({ message: 'Your username and/or password are incorrect, please retry' });
      return;
    }

    // Validate entered password matches stored password
    const validPassword = await gamerCheck.checkPw(req.body.password);
    
    // Failure message on incorrect password entry
    if (!validPassword) {
      res.status(401).json({ message: 'Your password is incorrect, please try again' });
      return;
    }

    // Session variables based on the current logged in gamer
    req.session.save(() => {
      req.session.user_id = gamerCheck.id;
      req.session.logged_in = true;
      
      res.json({ gamer: gamerCheck, message: `You're logged in`})
    });
    

  } catch (error) {
    res.status(500).json({error: error, message: `I'm sorry but I am unable to continue.`});
    console.log(error)
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {

    // Removes all session data on logout
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;