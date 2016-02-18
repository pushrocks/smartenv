/// <reference path="typings/main.d.ts" />

import environment = require("./smartenv.environment");
import objectstorage = require("./smartenv.objectstorage");

var smartenv:any = {}; //create smartenv object
environment.init(smartenv);
smartenv.obs = objectstorage.obs;

export = smartenv;
