import { tap, expect } from 'tapbundle'
import * as smartenv from '../ts/index'

let testEnv: smartenv.Smartenv

tap.test('should print env', async () => {
  testEnv = new smartenv.Smartenv()
})

tap.test('should print a overview to console', async () => {
  testEnv.printEnv()
})

tap.test('should get os', async () => {
  let resultMac = await testEnv.isMacAsync()
  let resultLinux = await testEnv.isLinuxAsync()
  let resultWindows = await testEnv.isWindowsAsync()
  const osModule = await import('os')
  if (resultMac) {
    expect(osModule.platform()).to.equal('darwin');
    console.log('platform is Mac!')
  } else if (resultLinux) {
    expect(osModule.platform()).to.equal('linux');
    console.log('platform is Linux!')
  } else {
    expect(osModule.platform()).to.equal('win32');
    console.log('platform is Windows!')
  }
  
})

tap.test('should state wether we are in CI', async () => {
  if(process.env.CI) {
    expect(testEnv.isCI).to.be.true()
  }
})

tap.start()
