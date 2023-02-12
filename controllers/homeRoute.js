const router = require('express').Router();
const { User, Game } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
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

module.exports = router;