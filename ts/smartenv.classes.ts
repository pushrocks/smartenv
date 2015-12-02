/// <reference path="index.ts" />
class Environment {
    public runtimeEnv:string;
    public userAgent:string;
    public nodeVersion:string;
    public isBrowser:boolean;
    public isNode:boolean;
    constructor(runtimeEnvArg,userAgentArg = "undefined") {
        this.runtimeEnv = runtimeEnvArg;
        this.userAgent = userAgentArg;
        if(runtimeEnvArg == "node"){
            this.isBrowser = false;
            this.isNode = true;
            this.nodeVersion = process.version;
        } else {
            this.isBrowser = true;
            this.isNode = true;
            this.nodeVersion = "undefined";
        }
    };
}
