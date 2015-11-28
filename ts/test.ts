/// <reference path="typings/tsd.d.ts" />
var smartenv = require("./index.js");
var beautylog = require("beautylog")("os");
beautylog.info("Now testing the smartenv module");
smartenv.info.print();
beautylog.info("Now testing the smartenv module");
smartenv.register({key1:"Peter"},"docit");
smartenv.info.print();
beautylog.log(smartenv.get("docit").key1);
smartenv.makeGlobal();
beautylog.log(global.smartenv.get("docit").key1);

var key2 = "hello";
smartenv.get("docit").key2 = key2;
beautylog.log(global.smartenv.get("docit").key2);

beautylog.success("Success!");