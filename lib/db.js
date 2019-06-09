'use strict'

// constructor
const Sequelize = require('sequelize')
// objecto sequelize
let sequelize = null

module.exports = function setupDataBase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
