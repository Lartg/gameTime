'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Event.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    players: DataTypes.INTEGER,
    seats: DataTypes.INTEGER,
    UserId: DataTypes.BIGINT,
    GameId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};