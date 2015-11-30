/// <reference path="index.ts" />
var Environment = (function () {
    function Environment(runtimeEnvArg, userAgentArg) {
        if (userAgentArg === void 0) { userAgentArg = "undefined"; }
        this.runtimeEnv = runtimeEnvArg;
        this.userAgent = userAgentArg;
        if (runtimeEnvArg == "node") {
            this.isBrowser = false;
            this.isNode = true;
            this.nodeVersion = process.version;
        }
        else {
            this.isBrowser = true;
            this.isNode = true;
            this.nodeVersion = "undefined";
        }
    }
    ;
    return Environment;
})();
/// <reference path="index.ts" />
/**
 * Deals with the environment the current JS script is running in.
 */
var SmartenvEnvironment;
(function (SmartenvEnvironment) {
    function init() {
        var environment;
        (function () {
            var localRunTimeEnv = "undefined";
            var localUserAgent = "undefined";
            if (typeof window !== 'undefined') {
                localRunTimeEnv = 'browser';
                localUserAgent = navigator.userAgent;
            }
            else if (typeof process !== 'undefined') {
                localRunTimeEnv = 'node';
            }
            environment = new Environment(localRunTimeEnv, localUserAgent);
        })();
        return function () {
            return environment;
        };
    }
    SmartenvEnvironment.init = init;
})(SmartenvEnvironment || (SmartenvEnvironment = {}));
/// <reference path="index.ts" />
var SmartenvObjectStorage;
(function (SmartenvObjectStorage) {
    function init() {
        var obs = {};
        var obsItems = {};
        obs.addItem = function (objectArg, paramName) {
            if (paramName === void 0) { paramName = "undefined"; }
            if (paramName == "undefined") {
                plugins.beautylog.error("paramName is undefined");
                return;
            }
            obsItems[paramName] = objectArg;
        };
        obs.getItem = function (keyName) {
            return obsItems[keyName];
        };
        obs.getComplete = function () {
            return obsItems;
        };
        obs.addComplete = function (itemsArg) {
            obsItems = plugins._.assign(obsItems, itemsArg);
            return obsItems;
        };
        return obs;
    }
    SmartenvObjectStorage.init = init;
})(SmartenvObjectStorage || (SmartenvObjectStorage = {}));
/// <reference path="typings/tsd.d.ts" />
/// <reference path="smartenv.classes.ts" />
/// <reference path="smartenv.environment.ts" />
/// <reference path="smartenv.objectstorage.ts" />
var plugins = {
    beautylog: require("beautylog")("os"),
    _: require("lodash")
};
var smartenv = {}; //create smartenv object
smartenv.getEnv = SmartenvEnvironment.init();
smartenv.obs = SmartenvObjectStorage.init();
/* ----------------------------------------- *
 * ----- print info ------------------------ *
 * ----------------------------------------- */
smartenv.printEnv = function () {
    if (smartenv.getEnv().isNode) {
        var smartenvVersion = require("./package.json").version;
        plugins.beautylog.log("node version is " + smartenv.getEnv().nodeVersion + " and smartenv version is " + smartenvVersion);
    }
    else {
        plugins.beautylog.log("browser is " + smartenv.getEnv().userAgent);
    }
    plugins.beautylog.log("the smartenv registration store currently holds the following properties:");
    console.log(Object.getOwnPropertyNames(smartenv.obs.getComplete).sort());
};
module.exports = smartenv;
