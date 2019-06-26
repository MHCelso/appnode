'use strict'

const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
let db = null

let config = {
  loggin: function () {}
}

let MetricStub = {
  belongsTo: sinon.spy()
} 

let AgentStub = null;
let sandbox = null

test.afterEach ( () => {
  sandbox && sandbox.restore()
})

test.beforeEach(async () => {
  sandbox = sinon.createSandbox()

  AgentStub = {
    hasMany: sandbox.spy() 
  }

  const setupDatabase = proxyquire('../', {
    './models/agent': () => AgentStub,
    './models/metric': () => MetricStub
  })
  db = await setupDatabase(config)
})


test('Agent', t => {
  t.truthy(db.Agent, 'Agent service should exit')
})

test.serial('Setup', t => {
  t.true(AgentStub.hasMany.called, 'AgentModel.hasMany was executed')
  t.true(AgentStub.hasMany.calledWith(MetricStub), 'Argument should be the MetricModel')
  t.true(MetricStub.belongsTo.called, 'MetricModel.belongsTo was executed')
  t.true(MetricStub.belongsTo.calledWith(AgentStub), 'Argument should be te Model')
})