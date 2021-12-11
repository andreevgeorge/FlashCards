'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {

    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' }),
        this.belongsTo(models.Deck, { foreignKey: 'deck_id' })
    }
  };
  Round.init({
    user_id: {
      type: DataTypes.INTEGER
    },
    deck_id: {
      type: DataTypes.INTEGER
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};
