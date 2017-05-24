import { tap, expect } from 'tapbundle'
import * as smartenv from '../dist/index'

let testEnv: smartenv.Smartenv

tap.test('should print env', async () => {
  testEnv = new smartenv.Smartenv()
})

tap.test('should print a overview to console', async () => {
  testEnv.printEnv()
})

tap.start()
