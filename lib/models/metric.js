'use strict'

// importamos objecto sequelize
const Sequelize = require('sequelize')
const setupDataBase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  // llama objecto de configuracion
  const sequelize = setupDataBase(config)

  // sequelize funcion define
  return sequelize.define('metric', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
