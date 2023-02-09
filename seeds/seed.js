const sequelize = require('../config/connection');
const { Gamers, Games } = require('../models');
const gamerData = require('./gamerData.json');
const gameData = require('./gameData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const gamers = await Gamers.bulkCreate(gamerData, {
    individualHooks: true,
    returning: true,
  });

  const games = await Games.bulkCreate(gameData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
