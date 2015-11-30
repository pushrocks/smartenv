/// <reference path="typings/tsd.d.ts" />
var smartenv = require("./index.js");
var beautylog = require("beautylog")("os");
beautylog.info("Now testing the smartenv module");
smartenv.printEnv();
beautylog.info("Now testing the smartenv module");
smartenv.register({ key1: "Peter" }, "docit");
smartenv.printEnv();
beautylog.log(smartenv.get("docit").key1);
beautylog.log(smartenv.get("docit").key1);
var key2 = "hello";
smartenv.get("docit").key2 = key2;
beautylog.log(smartenv.get("docit").key2);
beautylog.success("Success!");
//# sourceMappingURL=test.js.map