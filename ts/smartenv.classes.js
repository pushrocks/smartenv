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
//# sourceMappingURL=smartenv.classes.js.map