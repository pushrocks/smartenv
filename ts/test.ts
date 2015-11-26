/// <reference path="typings/tsd.d.ts" />
var smartenv = require("./index.js");
var beautylog = require("beautylog")("os");
beautylog.info("Now testing the smartenv module");
smartenv.info();
beautylog.info("Now testing the smartenv module");
smartenv.register({key1:"Peter"},"docit");
smartenv.info();
beautylog.log(smartenv.get("docit").key1);
smartenv.makeGlobal();
beautylog.log(global.smartenv.get("docit").key1);
beautylog.success("Success!");