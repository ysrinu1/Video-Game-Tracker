const Gamers = require('./gamers');
const Games = require('./games');

// Each Game belongs to a single gamer
Games.belongsTo(Gamers, {
    foreignKey: 'gamer_id'
});

module.exports = { Gamers, Games };
