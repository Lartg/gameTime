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
      Event.hasMany(models.User);
      Event.belongsTo(models.Game);
    }
  }
  Event.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
    players: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};