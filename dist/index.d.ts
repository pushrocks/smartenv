import * as classes from './smartenv.classes';
declare let smartenv: {
    getEnv: () => classes.Environment;
    printEnv: () => void;
    obs: any;
};
export = smartenv;
