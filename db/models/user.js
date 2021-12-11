'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasMany(models.Round, { foreignKey: 'user_id' }),
      this.hasMany(models.Guess, { foreignKey: 'user_id' })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
