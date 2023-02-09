const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


// Original model name was "User"
class Games extends Model {
}

Games.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    system: {
    type: DataTypes.STRING,
    allowNull: true
  },
   gamer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'gamers',
        key: 'id'
    },
  },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
  },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
  },
    tips_tricks: {
      type: DataTypes.TEXT,
      allowNull: true
  }
  },
  {
    hooks: {
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'games',
  },
);

module.exports = Games;
