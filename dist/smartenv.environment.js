"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes = require("./smartenv.classes");
const objectStorage = require("./smartenv.objectstorage");
let environment;
let envDetermined = false;
/**
 * returns the environment
 * @returns {Environment}
 */
exports.getEnv = function () {
    if (!envDetermined) {
        environment = new classes.Environment();
        envDetermined = true; // ensure code above only runs once
    }
    ;
    return environment;
};
/**
 * prints the environment to console
 */
exports.printEnv = function () {
    if (this.getEnv().isNode) {
        console.log('running on NODE');
        let smartenvVersion = require('../package.json').version;
        console.log('node version is ' + this.getEnv().nodeVersion + ' and smartenv version is ' + smartenvVersion);
    }
    else {
        console.log('running on BROWSER');
        console.log('browser is ' + this.getEnv().userAgent);
    }
    console.log('the smartenv registration store currently holds the following properties:');
    console.log(Object.getOwnPropertyNames(objectStorage.obs.getAll()));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGVudi5lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDhDQUE2QztBQUM3QywwREFBeUQ7QUFHekQsSUFBSSxXQUFnQyxDQUFBO0FBQ3BDLElBQUksYUFBYSxHQUFZLEtBQUssQ0FBQTtBQUVsQzs7O0dBR0c7QUFDUSxRQUFBLE1BQU0sR0FBRztJQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakIsV0FBVyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3ZDLGFBQWEsR0FBRyxJQUFJLENBQUEsQ0FBQyxtQ0FBbUM7SUFDNUQsQ0FBQztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsV0FBVyxDQUFBO0FBQ3RCLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1MsUUFBQSxRQUFRLEdBQUc7SUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLEdBQUcsZUFBZSxDQUFDLENBQUE7SUFDL0csQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFBO0lBQ3hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ3ZFLENBQUMsQ0FBQSJ9