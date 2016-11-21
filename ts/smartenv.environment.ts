/**
 * Deals with the environment the current JS script is running in.
 */
import * as plugins from './smartenv.plugins'
import * as classes from './smartenv.classes'
import * as objectStorage from './smartenv.objectstorage'


let environment: classes.Environment
let envDetermined: boolean = false

/**
 * returns the environment
 * @returns {Environment}
 */
export var getEnv = function(){
    if (!envDetermined) {
        environment = new classes.Environment()
        envDetermined = true // ensure code above only runs once
    };
    return environment
}

/**
 * prints the environment to console
 */
export var  printEnv = function() {
    if (this.getEnv().isNode) {
        console.log('running on NODE')
        let smartenvVersion = require('../package.json').version
        console.log('node version is ' + this.getEnv().nodeVersion + ' and smartenv version is ' + smartenvVersion)
    } else {
        console.log('running on BROWSER')
        console.log('browser is ' + this.getEnv().userAgent)
    }
    console.log('the smartenv registration store currently holds the following properties:')
    console.log(Object.getOwnPropertyNames(objectStorage.obs.getAll()))
}
