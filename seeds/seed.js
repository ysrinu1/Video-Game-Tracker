const sequelize = require('../config/connection');
const { Gamer, Games } = require('../models');
const userData = require('./gamerData.json');
const postData = require('./gameData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const users = await User.bulkCreate(gamersData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(gamesData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
