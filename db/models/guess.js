'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guess extends Model {

    static associate(models) {
      this.belongsTo(models.Round, { foreignKey: 'round_id' }),
        this.belongsTo(models.User, { foreignKey: 'user_id' }),
        this.belongsTo(models.Card, { foreignKey: 'card_id' })
    }
  };
  Guess.init({
    round_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    firstTry: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Guess',
  });
  return Guess;
};
