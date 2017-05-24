export interface IEnvObject {
    name: string;
    value: string;
}
export declare class Smartenv {
    runtimeEnv: string;
    isBrowser: boolean;
    userAgent: string;
    isNode: boolean;
    nodeVersion: string;
    isCI: boolean;
    constructor();
    /**
     * get environment variables that fit the description
     */
    getEnvVars(regexArg: RegExp): Promise<void>;
    /**
     * prints the environment to console
     */
    printEnv(): Promise<void>;
}
