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
  public async getEnvAwareModule(optionsArg: {
    nodeModuleName: string;
    webUrlArg: string;
    getFunction: () => any;
  }) {
    if (this.isNode) {
      const moduleResult = await  this.getSafeNodeModule(optionsArg.nodeModuleName);
      return moduleResult;
    } else if (this.isBrowser) {
      const moduleResult = await this.getSafeWebModule(optionsArg.webUrlArg, optionsArg.getFunction);
    } else {
      console.error('platform for loading not supported by smartenv');
    }
  }

  public getSafeNodeModule<T = any>(moduleNameArg: string): T {
    if (!this.isNode) {
      console.error('You tried to load a node module in a wrong context');
      return;
    }
    // tslint:disable-next-line: function-constructor
    return new Function(
      'exports',
      'require',
      'module',
      '__filename',
      '__dirname',
      `return require('${moduleNameArg}')`
    )(exports, require, module, __filename, __dirname);
  }

  public loadedScripts: string[] = [];
  public async getSafeWebModule(urlArg: string, getFunctionArg: () => any) {
    if (!this.isBrowser) {
      console.error('You tried to load a web module in a wrong context');
      return;
    }
    
    if (this.loadedScripts.includes(urlArg)) {
      return getFunctionArg();
    } else {
      this.loadedScripts.push(urlArg);
    }
    
    const done = plugins.smartpromise.defer();
    if (globalThis.importScripts) {
      globalThis.importScripts(urlArg);
      done.resolve();
    } else {
      const script = document.createElement('script');
      script.onload = () => {
        done.resolve();
      };
      script.src = urlArg;
      document.head.appendChild(script);
    }
    await done.promise;
    return getFunctionArg();
  }

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
      const os = this.getSafeNodeModule('os');
      return os.platform() === 'darwin';
    } else {
      return false;
    }
  }

  public async isWindowsAsync(): Promise<boolean> {
    if (this.isNode) {
      const os = this.getSafeNodeModule('os');
      return os.platform() === 'win32';
    } else {
      return false;
    }
  }

  public async isLinuxAsync(): Promise<boolean> {
    if (this.isNode) {
      const os = this.getSafeNodeModule('os');
      return os.platform() === 'linux';
    } else {
      return false;
    }
  }

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
