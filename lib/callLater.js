const delay = require('./delay')

async function callLater (fn, ms, ...args) {
  await delay(ms)
  return fn.apply(this, args)
}

module.exports = callLater
