const router = require('express').Router();
const { response } = require('express');
const { User, Game } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      User.findOne({
        attributes: {exclude: ["password"]},
        where: {
          id: `${req.session.user_id}`
        },
        include: [{
          model: Game,
          attributes: ["title", "system", "genre", "rating", "summary", "tips_tricks"]
        }]
      })
      res.render('dashboard', {logged_in: req.session.logged_in});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;