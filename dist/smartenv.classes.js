"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuY2xhc3Nlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52LmNsYXNzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNEQUFzRDtBQUV0RDtJQVNJO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUMzQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0lBQUEsQ0FBQztDQUNMO0FBbkJELGtDQW1CQyJ9