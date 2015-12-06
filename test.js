/// <reference path="typings/tsd.d.ts" />
var smartenv = require("./index.js");
var beautylog = require("beautylog")("os");
beautylog.info("Now testing the smartenv module");
smartenv.printEnv();
beautylog.info("Now testing the smartenv module");
smartenv.obs.add("docit", { key1: "Peter" });
smartenv.printEnv();
beautylog.log(smartenv.obs.get("docit").key1);
beautylog.log(smartenv.obs.get("docit").key1);
var key2 = "hello";
smartenv.obs.get("docit").key2 = key2;
beautylog.log(smartenv.obs.get("docit").key2);
beautylog.success("Success!");
