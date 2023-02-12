const User = require('./user');
const Game = require('./game');

// Each Game belongs to a single gamer
Game.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Game };
