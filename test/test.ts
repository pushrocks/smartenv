import * as smartenv from '../dist/index.js'
import * as beautylog from 'beautylog'

import { tap, expect } from 'tapbundle'

tap.test('should print env', async () => {
  smartenv.printEnv()
}).catch(tap.threw)

// test smartenv.obs.add
tap.test('obs add something', async () => {
  smartenv.obs.add('myTestObject', { key1: 'Peter' })
  smartenv.obs.add('myTestObject', { key1: 'Klaus' }) // now trying to add a second
  return expect(smartenv.obs.get('myTestObject').key1).to.equal('Peter')
})

// test smartenv.obs.replace
tap.test('', async () => {
  smartenv.obs.replace('myTestObject', { key1: 'Klaus' })
  expect(smartenv.obs.get('myTestObject').key1).to.equal('Klaus')
})

tap.test('should merge things', async () => {
  smartenv.obs.merge('myTestObject', { key2: 'Peter' })
  expect(smartenv.obs.get('myTestObject').key1).to.equal('Klaus')
  return expect(smartenv.obs.get('myTestObject').key2).to.equal('Peter')
})

tap.test('set via get', async () => {
  smartenv.obs.get('myTestObject').key2 = 'hello'
  return expect(smartenv.obs.get('myTestObject').key2).to.equal('hello')
})

tap.test('should get regex env array', async () => {
  process.env.CUSTOM = 'some'
  let resultArray = await smartenv.getEnvVars(/CUSTOM/)
  return expect(resultArray).to.be.length(1)
})
