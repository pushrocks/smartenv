export interface IEnvObject {
    name: string;
    value: string;
}
export declare class Smartenv {
    readonly runtimeEnv: string;
    readonly isBrowser: boolean;
    readonly userAgent: string;
    readonly isNode: boolean;
    readonly nodeVersion: string;
    readonly isCI: boolean;
    isMacAsync(): Promise<boolean>;
    isWindowsAsync(): Promise<boolean>;
    isLinuxAsync(): Promise<boolean>;
    /**
     * get environment variables that fit the description
     */
    /**
     * prints the environment to console
     */
    printEnv(): Promise<void>;
}
