const router = require('express').Router();
const { User, Game } = require('../models');
// const auth = require('../utils/auth'); 

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

router.get('/game', async (req, res) => {
  try {
    res.render('game', { 
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

module.exports = router;
