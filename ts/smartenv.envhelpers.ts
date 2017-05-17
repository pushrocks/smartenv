import * as plugins from './smartenv.plugins'
export let getEnvString = function (): string {
  if (typeof window !== 'undefined') {
    return 'browser'
  } else if (typeof process !== 'undefined') {
    return 'node'
  }
}

/**
 * gets the user agent string in a browser
 */
export let getUserAgentString = function (): string {
  if (isBrowser()) { // make sure we are in Browser
    return navigator.userAgent
  } else {
    return 'undefined'
  }
}

export let isNode = function (): boolean {
  return getEnvString() === 'node'
}

export let getNodeVersion = function (): string {
  return process.version
}

export let isBrowser = function (): boolean {
  return !isNode()
}

export let isCI = function () {
  if (process.env.CI) {
    return true
  } else {
    return false
  };
}
