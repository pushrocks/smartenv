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
//# sourceMappingURL=smartenv.environment.js.map