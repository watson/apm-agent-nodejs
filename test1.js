'use strict'

var agent = require('./').start({
  serviceName: 'test',
  captureExceptions: false
})

setInterval(function () {
  agent.captureError(new Error('foo'))
}, 100)
