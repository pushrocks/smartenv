import * as plugins from './smartenv.plugins';
import * as interfaces from './interfaces';

// interfaces
export interface IEnvObject {
  name: string;
  value: string;
}

/**
 * Smartenv class that makes it easy
 */
export class Smartenv {
  get runtimeEnv() {
    if (typeof window !== 'undefined') {
      return 'browser';
    } else if (typeof process !== 'undefined') {
      return 'node';
    }
  }

  get isBrowser(): boolean {
    return !this.isNode;
  }

  get userAgent(): string {
    if (this.isBrowser) {
      // make sure we are in Browser
      return navigator.userAgent;
    } else {
      return 'undefined';
    }
  }

  get isNode(): boolean {
    return this.runtimeEnv === 'node';
  }

  get nodeVersion(): string {
    return process.version;
  }

  get isCI(): boolean {
    if (this.isNode) {
      if (process.env.CI) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  async isMacAsync(): Promise<boolean> {
    if (this.isNode) {
      let os = await import('os');
      return os.platform() === 'darwin';
    } else {
      return false;
    }
  }

  async isWindowsAsync(): Promise<boolean> {
    if (this.isNode) {
      let os = await import('os');
      return os.platform() === 'win32';
    } else {
      return false;
    }
  }

  async isLinuxAsync(): Promise<boolean> {
    if (this.isNode) {
      let os = await import('os');
      return os.platform() === 'linux';
    } else {
      return false;
    }
  }

  /**
   * get environment variables that fit the description
   */
  // get envVars (regexArg: RegExp) {
  //   let EnvironmentArray = []
  //   // TODO: plugins.smartparam.forEachMinimatch()
  // }

  /**
   * prints the environment to console
   */
  async printEnv() {
    if (this.isNode) {
      console.log('running on NODE');
      let smartenvVersion = require('../package.json').version;
      console.log(
        'node version is ' + this.nodeVersion + ' and smartenv version is ' + smartenvVersion
      );
    } else {
      console.log('running on BROWSER');
      console.log('browser is ' + this.userAgent);
    }
  }
}
