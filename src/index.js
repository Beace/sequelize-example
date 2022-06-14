const assert = require('assert');
const Sequelize = require('@sequelize/core');
const { DataTypes } = Sequelize;

// Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: package subpath './lib/model.js' is not defined by "exports"
const { Model } = require('@sequelize/core/model.js');

const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

assert(User === sequelize.models.User);

module.exports = User;


