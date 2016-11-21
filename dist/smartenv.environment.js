"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGVudi5lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsOENBQTZDO0FBQzdDLDBEQUF5RDtBQUd6RCxJQUFJLFdBQWdDLENBQUE7QUFDcEMsSUFBSSxhQUFhLEdBQVksS0FBSyxDQUFBO0FBRWxDOzs7R0FHRztBQUNRLFFBQUEsTUFBTSxHQUFHO0lBQ2hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNqQixXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDdkMsYUFBYSxHQUFHLElBQUksQ0FBQSxDQUFDLG1DQUFtQztJQUM1RCxDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUyxRQUFBLFFBQVEsR0FBRztJQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDOUIsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFBO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsR0FBRywyQkFBMkIsR0FBRyxlQUFlLENBQUMsQ0FBQTtJQUMvRyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJFQUEyRSxDQUFDLENBQUE7SUFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDdkUsQ0FBQyxDQUFBIn0=