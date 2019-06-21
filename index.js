'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const defaults = require('defaults')

// exportar funcion que recibe configuracion
// cuando sea resuelta me devolvera un agente y una metrica
module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)
  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel)
  // realiza promesa conectar a la BD
  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  // sequelize.sync();
  const Agent = {}
  const Metric = {}
  return {
    Agent,
    Metric
  }
}
