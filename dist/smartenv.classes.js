"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers = require("./smartenv.classes.helpers");
class Environment {
    constructor() {
        this.runtimeEnv = helpers.getEnvString();
        this.isBrowser = helpers.isBrowser();
        this.userAgent = helpers.getUserAgentString();
        this.isNode = helpers.isNode();
        this.nodeVersion = helpers.getNodeVersion();
        this.isCI = helpers.isCI();
        this.isTravis = helpers.isTravis();
        this.isC9 = helpers.isC9();
    }
    ;
}
exports.Environment = Environment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52LmNsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBc0Q7QUFFdEQ7SUFTSTtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDOUIsQ0FBQztJQUFBLENBQUM7Q0FDTDtBQW5CRCxrQ0FtQkMifQ==