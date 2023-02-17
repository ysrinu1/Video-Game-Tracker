const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Game extends Model {
}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
    title: {
      type: DataTypes.STRING,
      allowNull: false
  },
    system: {
    type: DataTypes.STRING,
    allowNull: true
  },
   user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
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
    modelName: 'game',
  },
);

module.exports = Game;
