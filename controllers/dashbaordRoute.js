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
      } catch (err) {
          console.error(err);
          res.status(400).json(err);
      }
});

module.exports = router;