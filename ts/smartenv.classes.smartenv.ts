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
  public get runtimeEnv() {
    if (typeof window !== 'undefined') {
      return 'browser';
    } else if (typeof process !== 'undefined') {
      return 'node';
    }
  }

  public get isBrowser(): boolean {
    return !this.isNode;
  }

  public get userAgent(): string {
    if (this.isBrowser) {
      // make sure we are in Browser
      return navigator.userAgent;
    } else {
      return 'undefined';
    }
  }

  public get isNode(): boolean {
    return this.runtimeEnv === 'node';
  }

  public get isWsl(): boolean {
    return plugins.isWsl;
  }

  public get nodeVersion(): string {
    return process.version;
  }

  public get isCI(): boolean {
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

  public async isMacAsync(): Promise<boolean> {
    if (this.isNode) {
      const os = await import('os');
      return os.platform() === 'darwin';
    } else {
      return false;
    }
  }

  public async isWindowsAsync(): Promise<boolean> {
    if (this.isNode) {
      const os = await import('os');
      return os.platform() === 'win32';
    } else {
      return false;
    }
  }

  public async isLinuxAsync(): Promise<boolean> {
    if (this.isNode) {
      const os = await import('os');
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
  public async printEnv() {
    if (this.isNode) {
      console.log('running on NODE');
      const smartenvVersion = require('../package.json').version;
      console.log(
        'node version is ' + this.nodeVersion + ' and smartenv version is ' + smartenvVersion
      );
    } else {
      console.log('running on BROWSER');
      console.log('browser is ' + this.userAgent);
    }
  }
}
