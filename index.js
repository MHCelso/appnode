'use strict'

// exportar funcion que recibe configuracion
// cuando sea resuelta me devolvera un agente y una metrica
module.exports = async function (config) {
  const Agent = {}
  const Metric = {}
  return {
    Agent,
    Metric
  }
}
