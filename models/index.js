const Gamers = require('./gamers');
const Games = require('./games');
const Genres = require('./genres');

// A single Gamer can have many games
Gamers.hasMany(Games, {
    foreignKey: 'game_id'
});
// Each Game belongs to a single gamer
Games.belongsTo(Gamer, {
    foreignKey: 'gamer_id'
});
// Each user can have many comments
Games.hasMany(Genres, {
    foreignKey: 'genre_id'
});

module.exports = { Gamers, Games, Genres };
