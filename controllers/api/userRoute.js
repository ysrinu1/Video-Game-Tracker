const router = require('express').Router();
const { response } = require('express');
const { User, Game } = require('../../models');

router.get('/:id', (req, res) => {
      User.findOne({
        attributes: {exclude: ["password"]},
        where: {
          id: req.params.id
        },
        include: [{
          model: Game,
          attributes: ["title", "system", "genre", "rating", "summary", "tips_tricks"]
        }]
      })
      .then(dbUserData => {
        if (!dbUserData){
        res.status(404).json({message: "User not found"});
        return;
    } res.json(dbUserData)
    }).catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;