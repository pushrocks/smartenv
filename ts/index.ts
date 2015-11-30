/// <reference path="typings/tsd.d.ts" />
/// <reference path="smartenv.classes.ts" />
/// <reference path="smartenv.environment.ts" />
/// <reference path="smartenv.objectstorage.ts" />
var plugins = {
    beautylog: require("beautylog")("os"),
    _: require("lodash")
}
var smartenv:any = {}; //create smartenv object

smartenv.getEnv = SmartenvEnvironment.init();
smartenv.obs = SmartenvObjectStorage.init();


/* ----------------------------------------- *
 * ----- print info ------------------------ *
 * ----------------------------------------- */
smartenv.printEnv = function() {
    if (smartenv.getEnv().isNode) {
        var smartenvVersion = require("./package.json").version;
        plugins.beautylog.log("node version is " + smartenv.getEnv().nodeVersion + " and smartenv version is " + smartenvVersion);
    } else {
        plugins.beautylog.log("browser is " + smartenv.getEnv().userAgent)
    }
    plugins.beautylog.log("the smartenv registration store currently holds the following properties:");
    console.log(Object.getOwnPropertyNames(smartenv.obs.getComplete).sort());
};



module.exports = smartenv;
