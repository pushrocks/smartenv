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
/// <reference path="typings/tsd.d.ts" />
/// <reference path="classes.ts" />
var beautylog = require("beautylog")("os");
var smartenv = {}; //create smartenv object
smartenv.items = {}; // create the items object to store items to.
/* ----------------------------------------- *
 * ----- Environment ----------------------- *
 * ----------------------------------------- */
var environment;
var setEnvironment = function () {
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
};
setEnvironment();
smartenv.getEnv = function () {
    return environment;
};
/* ----------------------------------------- *
 * ----- Info vars ------------------------- *
 * ----------------------------------------- */
smartenv.printEnv = function () {
    if (environment.isNode) {
        var smartenvVersion = require("./package.json").version;
        beautylog.log("node version is " + environment.nodeVersion + " and smartenv version is " + smartenvVersion);
    }
    else {
        beautylog.log("browser is " + environment.userAgent);
    }
    beautylog.log("the smartenv registration store currently holds the following properties:");
    console.log(Object.getOwnPropertyNames(smartenv.items).sort());
};
smartenv.register = function (objectArg, paramName) {
    if (paramName === void 0) { paramName = "undefined"; }
    if (paramName == "undefined") {
        beautylog.error("paramName is undefined");
        return;
    }
    smartenv.items[paramName] = objectArg;
};
smartenv.get = function (keyName) {
    return smartenv.items[keyName];
};
module.exports = smartenv;
