'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {

    static associate(models) {
      this.belongsTo(models.Deck, { foreignKey: 'deck_id' }),
        this.hasMany(models.Guess, { foreignKey: 'card_id' })
    }
  };
  Card.init({
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deck_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
