const router = require('express').Router();
const { User, Game } = require('../models');
const auth = require('../utils/auth'); 

router.get('/', async (req, res) => {
  try {
    res.render('home', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

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

router.get('/gameentry', async (req, res) => {
  try {
    res.render('gameentry', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game/:id', async (req, res) => {
  try {      
      const post = await Game.findByPk(req.params.id, {
          include: [{
              model: User,
              model: Game,
              include: [{
                      model: User, 
                      attributes : ['user_name']
                  }]
            }]
        });
      const singlePost = post.get({ plain: true });
        res.render('game', {
          singlePost,
          logged_in: req.session.logged_in, 
        })
      } catch (err) {
          console.error(err);
          res.status(400).json({error : err, message : "Something went wrong."});
      } 
});

module.exports = router;