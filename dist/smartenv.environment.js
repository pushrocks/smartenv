#!/usr/bin/env node

/// <reference path="typings/main.d.ts" />
/**
 * Deals with the environment the current JS script is running in.
 */
var plugins = require("./smartenv.plugins");
var classes = require("./smartenv.classes");
var objectStorage = require("./smartenv.objectstorage");
var environment;
var envDetermined = false;
/**
 * returns the environment
 * @returns {Environment}
 */
var getEnv = function () {
    if (!envDetermined) {
        (function () {
            var localRunTimeEnv = "undefined";
            var localUserAgent = "undefined";
            if (typeof window !== "undefined") {
                localRunTimeEnv = 'browser';
                localUserAgent = navigator.userAgent;
            }
            else if (typeof process !== "undefined") {
                localRunTimeEnv = 'node';
            }
            environment = new classes.Environment(localRunTimeEnv, localUserAgent);
        })();
        envDetermined = true; // ensure code above only runs once
    }
    ;
    return environment;
};
/**
 * prints the environment to console
 */
var printEnv = function () {
    if (this.getEnv().isNode) {
        plugins.beautylog.ok("running on NODE");
        var smartenvVersion = require("../package.json").version;
        plugins.beautylog.log("node version is " + this.getEnv().nodeVersion + " and smartenv version is " + smartenvVersion);
    }
    else {
        plugins.beautylog.ok("running on BROWSER");
        plugins.beautylog.log("browser is " + this.getEnv().userAgent);
    }
    plugins.beautylog.log("the smartenv registration store currently holds the following properties:");
    console.log(Object.getOwnPropertyNames(objectStorage.obs.getAll()));
};
exports.init = function (objectArg) {
    objectArg.getEnv = getEnv;
    objectArg.printEnv = printEnv;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0ZW52LmVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQzs7R0FFRztBQUNILElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTyxPQUFPLFdBQVcsb0JBQW9CLENBQUMsQ0FBQztBQUMvQyxJQUFPLGFBQWEsV0FBVywwQkFBMEIsQ0FBQyxDQUFDO0FBRzNELElBQUksV0FBK0IsQ0FBQztBQUNwQyxJQUFJLGFBQWEsR0FBVyxLQUFLLENBQUM7QUFFbEM7OztHQUdHO0FBQ0gsSUFBSSxNQUFNLEdBQUc7SUFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQztZQUNHLElBQUksZUFBZSxHQUFHLFdBQVcsQ0FBQztZQUNsQyxJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsZUFBZSxHQUFHLFNBQVMsQ0FBQztnQkFDNUIsY0FBYyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDekMsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzdCLENBQUM7WUFDRCxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBQyxjQUFjLENBQUMsQ0FBQztRQUMxRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLG1DQUFtQztJQUM3RCxDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxXQUFXLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUY7O0dBRUc7QUFDSCxJQUFLLFFBQVEsR0FBRztJQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEdBQUcsMkJBQTJCLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDMUgsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO0lBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQztBQUVTLFlBQUksR0FBRyxVQUFTLFNBQVM7SUFDaEMsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDMUIsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDbEMsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0ZW52LmVudmlyb25tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cInR5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbi8qKlxuICogRGVhbHMgd2l0aCB0aGUgZW52aXJvbm1lbnQgdGhlIGN1cnJlbnQgSlMgc2NyaXB0IGlzIHJ1bm5pbmcgaW4uXG4gKi9cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRlbnYucGx1Z2luc1wiKTtcbmltcG9ydCBjbGFzc2VzID0gcmVxdWlyZShcIi4vc21hcnRlbnYuY2xhc3Nlc1wiKTtcbmltcG9ydCBvYmplY3RTdG9yYWdlID0gcmVxdWlyZShcIi4vc21hcnRlbnYub2JqZWN0c3RvcmFnZVwiKTtcblxuXG52YXIgZW52aXJvbm1lbnQ6Y2xhc3Nlcy5FbnZpcm9ubWVudDtcbnZhciBlbnZEZXRlcm1pbmVkOmJvb2xlYW4gPSBmYWxzZTtcblxuLyoqXG4gKiByZXR1cm5zIHRoZSBlbnZpcm9ubWVudFxuICogQHJldHVybnMge0Vudmlyb25tZW50fVxuICovXG52YXIgZ2V0RW52ID0gZnVuY3Rpb24oKXtcbiAgICBpZiAoIWVudkRldGVybWluZWQpIHtcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGxvY2FsUnVuVGltZUVudiA9IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgICB2YXIgbG9jYWxVc2VyQWdlbnQgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFJ1blRpbWVFbnYgPSAnYnJvd3Nlcic7XG4gICAgICAgICAgICAgICAgbG9jYWxVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGxvY2FsUnVuVGltZUVudiA9ICdub2RlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudmlyb25tZW50ID0gbmV3IGNsYXNzZXMuRW52aXJvbm1lbnQobG9jYWxSdW5UaW1lRW52LGxvY2FsVXNlckFnZW50KTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgZW52RGV0ZXJtaW5lZCA9IHRydWU7IC8vIGVuc3VyZSBjb2RlIGFib3ZlIG9ubHkgcnVucyBvbmNlXG4gICAgfTtcbiAgICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG4vKipcbiAqIHByaW50cyB0aGUgZW52aXJvbm1lbnQgdG8gY29uc29sZVxuICovXG52YXIgIHByaW50RW52ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ2V0RW52KCkuaXNOb2RlKSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLm9rKFwicnVubmluZyBvbiBOT0RFXCIpO1xuICAgICAgICB2YXIgc21hcnRlbnZWZXJzaW9uID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uO1xuICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5sb2coXCJub2RlIHZlcnNpb24gaXMgXCIgKyB0aGlzLmdldEVudigpLm5vZGVWZXJzaW9uICsgXCIgYW5kIHNtYXJ0ZW52IHZlcnNpb24gaXMgXCIgKyBzbWFydGVudlZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLm9rKFwicnVubmluZyBvbiBCUk9XU0VSXCIpO1xuICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5sb2coXCJicm93c2VyIGlzIFwiICsgdGhpcy5nZXRFbnYoKS51c2VyQWdlbnQpO1xuICAgIH1cbiAgICBwbHVnaW5zLmJlYXV0eWxvZy5sb2coXCJ0aGUgc21hcnRlbnYgcmVnaXN0cmF0aW9uIHN0b3JlIGN1cnJlbnRseSBob2xkcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XCIpO1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iamVjdFN0b3JhZ2Uub2JzLmdldEFsbCgpKSk7XG59O1xuXG5leHBvcnQgdmFyIGluaXQgPSBmdW5jdGlvbihvYmplY3RBcmcpIHtcbiAgICBvYmplY3RBcmcuZ2V0RW52ID0gZ2V0RW52O1xuICAgIG9iamVjdEFyZy5wcmludEVudiA9IHByaW50RW52O1xufTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
