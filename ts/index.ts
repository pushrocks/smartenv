/// <reference path="typings/main.d.ts" />

import SmartenvEnvironment = require("./smartenv.environment");
import SmartenvObjectStorage = require("./smartenv.objectstorage");

var smartenv:any = {}; //create smartenv object
SmartenvEnvironment.init(smartenv);
smartenv.obs = SmartenvObjectStorage.obs;

export = smartenv;
