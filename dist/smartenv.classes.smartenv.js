"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Smartenv {
    get runtimeEnv() {
        if (typeof window !== 'undefined') {
            return 'browser';
        }
        else if (typeof process !== 'undefined') {
            return 'node';
        }
    }
    get isBrowser() {
        return !this.isNode;
    }
    get userAgent() {
        if (this.isBrowser) {
            return navigator.userAgent;
        }
        else {
            return 'undefined';
        }
    }
    get isNode() {
        return this.runtimeEnv === 'node';
    }
    get nodeVersion() {
        return process.version;
    }
    get isCI() {
        if (this.isNode) {
            if (process.env.CI) {
                return true;
            }
            else {
                return false;
            }
            ;
        }
        else {
            return false;
        }
    }
    isMacAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isNode) {
                let os = yield Promise.resolve().then(() => require('os'));
                return os.platform() === 'darwin';
            }
            else {
                return false;
            }
        });
    }
    isWindowsAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isNode) {
                let os = yield Promise.resolve().then(() => require('os'));
                return os.platform() === 'win32';
            }
            else {
                return false;
            }
        });
    }
    isLinuxAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isNode) {
                let os = yield Promise.resolve().then(() => require('os'));
                return os.platform() === 'linux';
            }
            else {
                return false;
            }
        });
    }
    /**
     * get environment variables that fit the description
     */
    // get envVars (regexArg: RegExp) {
    //   let EnvironmentArray = []
    //   // TODO: plugins.smartparam.forEachMinimatch()
    // }
    /**
     * prints the environment to console
     */
    printEnv() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isNode) {
                console.log('running on NODE');
                let smartenvVersion = require('../package.json').version;
                console.log('node version is ' + this.nodeVersion + ' and smartenv version is ' + smartenvVersion);
            }
            else {
                console.log('running on BROWSER');
                console.log('browser is ' + this.userAgent);
            }
        });
    }
}
exports.Smartenv = Smartenv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuY2xhc3Nlcy5zbWFydGVudi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52LmNsYXNzZXMuc21hcnRlbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVFBO0lBRUUsSUFBSSxVQUFVO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsU0FBUyxDQUFBO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFBO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3JCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQTtRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssTUFBTSxDQUFBO0lBQ25DLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFBO1lBQ2IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDZCxDQUFDO1lBQUEsQ0FBQztRQUNKLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVLLFVBQVU7O1lBQ2QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxFQUFFLEdBQUcsMkNBQWEsSUFBSSxFQUFDLENBQUE7Z0JBQzNCLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxDQUFBO1lBQ25DLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsS0FBSyxDQUFBO1lBQ2QsQ0FBQztRQUNILENBQUM7S0FBQTtJQUVLLGNBQWM7O1lBQ2xCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksRUFBRSxHQUFHLDJDQUFhLElBQUksRUFBQyxDQUFBO2dCQUMzQixNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLE9BQU8sQ0FBQTtZQUNsQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUNkLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFSyxZQUFZOztZQUNoQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLEVBQUUsR0FBRywyQ0FBYSxJQUFJLEVBQUMsQ0FBQTtnQkFDM0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxPQUFPLENBQUE7WUFDbEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDZCxDQUFDO1FBQ0gsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDSCxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLG1EQUFtRDtJQUNuRCxJQUFJO0lBRUo7O09BRUc7SUFDRyxRQUFROztZQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtnQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixHQUFHLGVBQWUsQ0FBQyxDQUFBO1lBQ3BHLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM3QyxDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUExRkQsNEJBMEZDIn0=