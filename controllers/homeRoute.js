const router = require('express').Router();
const { User, Game } = require('../models');
const auth = require('../utils/auth'); 

router.get('/', async (req, res) => {
    try {
      console.log(JSON.stringify(req.session));
      res.render('home', {logged_in: req.session.logged_in,
        id: req.session.user_id
      });
  
    } catch (err) {
      res.status(500).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findOne({ 
//       attributes: {exclude: ["password"]},
//       where: {id: req.session.id},
//       include: [{ model: Game }],
//       attributes: ["title", "system", "genre", "rating", "summary", "tips_tricks"]
//     });
//   } catch (err) {
//       console.log(err); 
//       res.status(500).json(err);
//   }
// });

router.get('/login', async (req, res) => {
  try {
    res.render('login', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game', async (req, res) => {
  try {
    res.render('game', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/dashboard', async (req, res) => {
//   try {
//     res.render('dashboard', { 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/logout', (req, res) => {
    debugger
  if (req.session) {
    
    // Removes all session data on logout
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
  res.redirect('/');
});

module.exports = router;