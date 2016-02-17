#!/usr/bin/env node

/// <reference path="typings/main.d.ts" />
/**
 * Deals with the environment the current JS script is running in.
 */
var plugins = require("./smartenv.plugins");
var SmartenvClasses = require("./smartenv.classes");
var SmartenvObjectStorage = require("./smartenv.objectstorage");
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
            environment = new SmartenvClasses.Environment(localRunTimeEnv, localUserAgent);
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
    console.log(Object.getOwnPropertyNames(SmartenvObjectStorage.obs.getAll()));
};
exports.init = function (objectArg) {
    objectArg.getEnv = getEnv;
    objectArg.printEnv = printEnv;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0ZW52LmVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQzs7R0FFRztBQUNILElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBTyxlQUFlLFdBQVcsb0JBQW9CLENBQUMsQ0FBQztBQUN2RCxJQUFPLHFCQUFxQixXQUFXLDBCQUEwQixDQUFDLENBQUM7QUFHbkUsSUFBSSxXQUF1QyxDQUFDO0FBQzVDLElBQUksYUFBYSxHQUFXLEtBQUssQ0FBQztBQUVsQzs7O0dBR0c7QUFDSCxJQUFJLE1BQU0sR0FBRztJQUNULEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO1lBQ0csSUFBSSxlQUFlLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLElBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUM1QixjQUFjLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztZQUN6QyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDN0IsQ0FBQztZQUNELFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUMsbUNBQW1DO0lBQzdELENBQUM7SUFBQSxDQUFDO0lBQ0YsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUN2QixDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNILElBQUssUUFBUSxHQUFHO0lBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDekQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsR0FBRywyQkFBMkIsR0FBRyxlQUFlLENBQUMsQ0FBQztJQUMxSCxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDJFQUEyRSxDQUFDLENBQUM7SUFDbkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRixDQUFDLENBQUM7QUFFUyxZQUFJLEdBQUcsVUFBUyxTQUFTO0lBQ2hDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzFCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ2xDLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydGVudi5lbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG4vKipcbiAqIERlYWxzIHdpdGggdGhlIGVudmlyb25tZW50IHRoZSBjdXJyZW50IEpTIHNjcmlwdCBpcyBydW5uaW5nIGluLlxuICovXG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0ZW52LnBsdWdpbnNcIik7XG5pbXBvcnQgU21hcnRlbnZDbGFzc2VzID0gcmVxdWlyZShcIi4vc21hcnRlbnYuY2xhc3Nlc1wiKTtcbmltcG9ydCBTbWFydGVudk9iamVjdFN0b3JhZ2UgPSByZXF1aXJlKFwiLi9zbWFydGVudi5vYmplY3RzdG9yYWdlXCIpO1xuXG5cbnZhciBlbnZpcm9ubWVudDpTbWFydGVudkNsYXNzZXMuRW52aXJvbm1lbnQ7XG52YXIgZW52RGV0ZXJtaW5lZDpib29sZWFuID0gZmFsc2U7XG5cbi8qKlxuICogcmV0dXJucyB0aGUgZW52aXJvbm1lbnRcbiAqIEByZXR1cm5zIHtFbnZpcm9ubWVudH1cbiAqL1xudmFyIGdldEVudiA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKCFlbnZEZXRlcm1pbmVkKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbFJ1blRpbWVFbnYgPSBcInVuZGVmaW5lZFwiO1xuICAgICAgICAgICAgdmFyIGxvY2FsVXNlckFnZW50ID0gXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxSdW5UaW1lRW52ID0gJ2Jyb3dzZXInO1xuICAgICAgICAgICAgICAgIGxvY2FsVXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBsb2NhbFJ1blRpbWVFbnYgPSAnbm9kZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbnZpcm9ubWVudCA9IG5ldyBTbWFydGVudkNsYXNzZXMuRW52aXJvbm1lbnQobG9jYWxSdW5UaW1lRW52LGxvY2FsVXNlckFnZW50KTtcbiAgICAgICAgfSkoKTtcbiAgICAgICAgZW52RGV0ZXJtaW5lZCA9IHRydWU7IC8vIGVuc3VyZSBjb2RlIGFib3ZlIG9ubHkgcnVucyBvbmNlXG4gICAgfTtcbiAgICByZXR1cm4gZW52aXJvbm1lbnQ7XG59O1xuXG4vKipcbiAqIHByaW50cyB0aGUgZW52aXJvbm1lbnQgdG8gY29uc29sZVxuICovXG52YXIgIHByaW50RW52ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ2V0RW52KCkuaXNOb2RlKSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLm9rKFwicnVubmluZyBvbiBOT0RFXCIpO1xuICAgICAgICB2YXIgc21hcnRlbnZWZXJzaW9uID0gcmVxdWlyZShcIi4uL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uO1xuICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5sb2coXCJub2RlIHZlcnNpb24gaXMgXCIgKyB0aGlzLmdldEVudigpLm5vZGVWZXJzaW9uICsgXCIgYW5kIHNtYXJ0ZW52IHZlcnNpb24gaXMgXCIgKyBzbWFydGVudlZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLm9rKFwicnVubmluZyBvbiBCUk9XU0VSXCIpO1xuICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5sb2coXCJicm93c2VyIGlzIFwiICsgdGhpcy5nZXRFbnYoKS51c2VyQWdlbnQpO1xuICAgIH1cbiAgICBwbHVnaW5zLmJlYXV0eWxvZy5sb2coXCJ0aGUgc21hcnRlbnYgcmVnaXN0cmF0aW9uIHN0b3JlIGN1cnJlbnRseSBob2xkcyB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XCIpO1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFNtYXJ0ZW52T2JqZWN0U3RvcmFnZS5vYnMuZ2V0QWxsKCkpKTtcbn07XG5cbmV4cG9ydCB2YXIgaW5pdCA9IGZ1bmN0aW9uKG9iamVjdEFyZykge1xuICAgIG9iamVjdEFyZy5nZXRFbnYgPSBnZXRFbnY7XG4gICAgb2JqZWN0QXJnLnByaW50RW52ID0gcHJpbnRFbnY7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
