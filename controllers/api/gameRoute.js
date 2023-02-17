const router = require('express').Router();
const { response } = require('express');
const { User, Game } = require('../../models');

// // Get all Games
// router.get('/', async (req, res) => {
//     try {
//         const gameData = await Game.findAll({
//             where:{
//                 // TODO: Fix this to be currently logged in user
//                 user_id: `${req.session.user_id}`
//             }
//         })
//         console.log(gameData)    
//         const games = gameData.map((game) => game.get({ plain: true }));
//         console.log(game)
//             res.render('dashboard',games);
//             res.status(200).json({ games });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Creates a new Game
router.post('/', async (req, res) => {
    try {
        const post = await Game.create({
            title: req.body.title,
            system: req.body.system,
            genre: req.body.genre,
            user_id: `${req.session.user_id}`,
            rating: req.body.rating,
            summary: req.body.summary,
            tips_tricks: req.body.tips_tricks
          });
        res.status(200).json({post, message : `New Game Created!`})
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;