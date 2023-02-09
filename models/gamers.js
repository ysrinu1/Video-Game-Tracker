const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');


class Gamers extends Model {
  checkPw(passWord) {
      return bcrypt.compareSync(passWord, this.password);
  }
}

Gamers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      },
    },
    birth_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    birth_day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      },
    },
  },
  {
    hooks: {beforeCreate: async (newUserData) => {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
    }},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gamers',
}
);

module.exports = Gamers;
