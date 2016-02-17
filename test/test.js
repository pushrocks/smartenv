#!/usr/bin/env node

/// <reference path="../ts/typings/main.d.ts" />
var smartenv = require("../dist/index.js");
var beautylog = require("beautylog");
beautylog.info("Now testing the smartenv module");
smartenv.printEnv();
beautylog.info("Now testing the smartenv module");
//test smartenv.obs.add
smartenv.obs.add("myTestObject", { key1: "Peter" });
smartenv.obs.add("myTestObject", { key1: "Klaus" }); //now trying to add a second
smartenv.printEnv();
beautylog.log(smartenv.obs.get("myTestObject").key1); // this should be Peter
//test smartenv.obs.replace
smartenv.obs.replace("myTestObject", { key1: "Klaus" });
beautylog.log(smartenv.obs.get("myTestObject").key1); // this should be Klaus
//test smartenv.obs.merge
smartenv.obs.merge("myTestObject", { key2: "Peter" });
beautylog.log(smartenv.obs.get("myTestObject").key1 + smartenv.obs.get("myTestObject").key2); // this should be KlausPeter
var key2 = "hello";
smartenv.obs.get("myTestObject").key2 = key2;
beautylog.log(smartenv.obs.get("myTestObject").key2);
beautylog.success("Success!");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7QUFDbEQsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUVsRCx1QkFBdUI7QUFDdkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7QUFDaEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7QUFDN0UsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3BCLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7QUFFN0UsMkJBQTJCO0FBQzNCLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0FBQ3BELFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7QUFFN0UseUJBQXlCO0FBQ3pCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0FBQ2xELFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO0FBRTFILElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUNuQixRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzdDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3RzL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbnZhciBzbWFydGVudiA9IHJlcXVpcmUoXCIuLi9kaXN0L2luZGV4LmpzXCIpO1xudmFyIGJlYXV0eWxvZyA9IHJlcXVpcmUoXCJiZWF1dHlsb2dcIik7XG5iZWF1dHlsb2cuaW5mbyhcIk5vdyB0ZXN0aW5nIHRoZSBzbWFydGVudiBtb2R1bGVcIik7XG5zbWFydGVudi5wcmludEVudigpO1xuYmVhdXR5bG9nLmluZm8oXCJOb3cgdGVzdGluZyB0aGUgc21hcnRlbnYgbW9kdWxlXCIpO1xuXG4vL3Rlc3Qgc21hcnRlbnYub2JzLmFkZFxuc21hcnRlbnYub2JzLmFkZChcIm15VGVzdE9iamVjdFwiLHtrZXkxOlwiUGV0ZXJcIn0pO1xuc21hcnRlbnYub2JzLmFkZChcIm15VGVzdE9iamVjdFwiLHtrZXkxOlwiS2xhdXNcIn0pOyAvL25vdyB0cnlpbmcgdG8gYWRkIGEgc2Vjb25kXG5zbWFydGVudi5wcmludEVudigpO1xuYmVhdXR5bG9nLmxvZyhzbWFydGVudi5vYnMuZ2V0KFwibXlUZXN0T2JqZWN0XCIpLmtleTEpOyAvLyB0aGlzIHNob3VsZCBiZSBQZXRlclxuXG4vL3Rlc3Qgc21hcnRlbnYub2JzLnJlcGxhY2VcbnNtYXJ0ZW52Lm9icy5yZXBsYWNlKFwibXlUZXN0T2JqZWN0XCIse2tleTE6XCJLbGF1c1wifSk7XG5iZWF1dHlsb2cubG9nKHNtYXJ0ZW52Lm9icy5nZXQoXCJteVRlc3RPYmplY3RcIikua2V5MSk7IC8vIHRoaXMgc2hvdWxkIGJlIEtsYXVzXG5cbi8vdGVzdCBzbWFydGVudi5vYnMubWVyZ2VcbnNtYXJ0ZW52Lm9icy5tZXJnZShcIm15VGVzdE9iamVjdFwiLHtrZXkyOlwiUGV0ZXJcIn0pO1xuYmVhdXR5bG9nLmxvZyhzbWFydGVudi5vYnMuZ2V0KFwibXlUZXN0T2JqZWN0XCIpLmtleTEgKyBzbWFydGVudi5vYnMuZ2V0KFwibXlUZXN0T2JqZWN0XCIpLmtleTIpOyAvLyB0aGlzIHNob3VsZCBiZSBLbGF1c1BldGVyXG5cbnZhciBrZXkyID0gXCJoZWxsb1wiO1xuc21hcnRlbnYub2JzLmdldChcIm15VGVzdE9iamVjdFwiKS5rZXkyID0ga2V5MjtcbmJlYXV0eWxvZy5sb2coc21hcnRlbnYub2JzLmdldChcIm15VGVzdE9iamVjdFwiKS5rZXkyKTtcblxuYmVhdXR5bG9nLnN1Y2Nlc3MoXCJTdWNjZXNzIVwiKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
