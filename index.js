'use strict'

const setupDatabase = require('./lib/db')
const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')

// exportar funcion que recibe configuracion
// cuando sea resuelta me devolvera un agente y una metrica
module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)
  AgentModel.hasMany(MetricModel)
  MetricModel.begingsTo(AgentModel)
  // realiza promesa conectar a la BD
  await sequelize.authenticate()
  // sequelize.sync();
  const Agent = {}
  const Metric = {}
  return {
    Agent,
    Metric
  }
}
