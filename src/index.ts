/**
 * @sequelize/core tsconfig.json
 * "exports": {
    ".": {
      "import": "./lib/index.mjs",
      "require": "./lib/index.js",
      "types": "./types/index.d.ts"
    },
    "./_non-semver-use-at-your-own-risk_/*": {
      "default": "./lib/*",
      "types": "./types/*.d.ts"
    },
    "./package.json": "./package.json"
  },
 */
import Sequelize, { DataTypes, Model } from '@sequelize/core';

const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { sequelize });

// console.log(User === sequelize.models.User);
export default User;