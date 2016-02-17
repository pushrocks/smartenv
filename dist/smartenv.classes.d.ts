/// <reference path="typings/main.d.ts" />
export declare class Environment {
    runtimeEnv: string;
    userAgent: string;
    nodeVersion: string;
    isBrowser: boolean;
    isNode: boolean;
    constructor(runtimeEnvArg: string, userAgentArg?: string);
}
