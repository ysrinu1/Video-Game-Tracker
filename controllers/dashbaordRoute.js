const router = require('express').Router();
const { User, Game } = require('../models');
const auth = require('../utils/auth'); 

router.get('/:id', async (req, res) => {
  try {
      const game = await Game.findByPk(req.params.id,
         {  include : [{
              model: Game, 
              include : {
                  model : User,
                  attributes : ['user_name']
              }}, 
              {
              model: User, 
              attributes: ['user_name']
              }
      ]});

      const userGames = user.map((game) => game.get({ plain: true}));
      res.render('dashboard', {
        userGames, 
          logged_in: req.session.logged_in, 
      });

      } catch (err) {
          console.error(err);
          res.status(400).json(err);
      }
});

module.exports = router;