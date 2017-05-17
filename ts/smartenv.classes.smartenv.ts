import * as plugins from './smartenv.plugins'
import helpers = require('./smartenv.envhelpers')

// interfaces
export interface IEnvObject {
  name: string
  value: string
}

export class Smartenv {
  runtimeEnv: string
  isBrowser: boolean
  userAgent: string
  isNode: boolean
  nodeVersion: string
  isCI: boolean
  constructor() {
    this.runtimeEnv = helpers.getEnvString()
    this.isBrowser = helpers.isBrowser()
    this.userAgent = helpers.getUserAgentString()
    this.isNode = helpers.isNode()
    this.nodeVersion = helpers.getNodeVersion()
    this.isCI = helpers.isCI()
  };

  /**
   * get environment variables that fit the description
   */
  async getEnvVars (regexArg: RegExp) {
    let EnvironmentArray = []
    // TODO: plugins.smartparam.forEachMinimatch()
  }

  /**
   * prints the environment to console
   */
  async printEnv () {
    if (this.isNode) {
      console.log('running on NODE')
      let smartenvVersion = require('../package.json').version
      console.log('node version is ' + this.nodeVersion + ' and smartenv version is ' + smartenvVersion)
    } else {
      console.log('running on BROWSER')
      console.log('browser is ' + this.userAgent)
    }
  }
}
