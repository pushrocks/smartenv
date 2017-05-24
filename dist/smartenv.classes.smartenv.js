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
const helpers = require("./smartenv.envhelpers");
class Smartenv {
    constructor() {
        this.runtimeEnv = helpers.getEnvString();
        this.isBrowser = helpers.isBrowser();
        this.userAgent = helpers.getUserAgentString();
        this.isNode = helpers.isNode();
        this.nodeVersion = helpers.getNodeVersion();
        this.isCI = helpers.isCI();
    }
    ;
    /**
     * get environment variables that fit the description
     */
    getEnvVars(regexArg) {
        return __awaiter(this, void 0, void 0, function* () {
            let EnvironmentArray = [];
            // TODO: plugins.smartparam.forEachMinimatch()
        });
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuY2xhc3Nlcy5zbWFydGVudi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52LmNsYXNzZXMuc21hcnRlbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLGlEQUFpRDtBQVFqRDtJQU9FO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBQUEsQ0FBQztJQUVGOztPQUVHO0lBQ0csVUFBVSxDQUFFLFFBQWdCOztZQUNoQyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQTtZQUN6Qiw4Q0FBOEM7UUFDaEQsQ0FBQztLQUFBO0lBRUQ7O09BRUc7SUFDRyxRQUFROztZQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7Z0JBQzlCLElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtnQkFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUEyQixHQUFHLGVBQWUsQ0FBQyxDQUFBO1lBQ3BHLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM3QyxDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFyQ0QsNEJBcUNDIn0=