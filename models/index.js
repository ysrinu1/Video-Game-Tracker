const User = require('./user');
const Game = require('./game');

// Each Game belongs to a single gamer
Game.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Game, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Game };
