const Gamers = require('./gamers');
const Games = require('./games');
const Genres = require('./genres');

// A single Gamer can have many games
Gamers.hasMany(Games, {
    foreignKey: 'game_id'
});
// Each Game belongs to a single gamer
Games.belongsTo(Gamers, {
    foreignKey: 'gamer_id'
});

module.exports = { Gamers, Games, Genres };
