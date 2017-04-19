"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartenv.plugins");
exports.obsItems = {};
/**
 * Objectstorage allows easy sharing of objects within node
 */
exports.obs = {
    add: function (paramNameArg = 'undefined', objectArg = 'undefined') {
        if (paramNameArg === 'undefined') {
            console.log('paramName is undefined');
            return;
        }
        if (objectArg === 'undefined') {
            console.log('objectArg is undefined');
        }
        if (typeof exports.obsItems[paramNameArg] === 'undefined') {
            exports.obsItems[paramNameArg] = objectArg;
        }
        else {
            console.log('object is already present, so add operation has failed.');
        }
        return exports.obsItems[paramNameArg];
    },
    replace: function (paramNameArg, objectArg) {
        exports.obsItems[paramNameArg] = objectArg;
    },
    merge: function (paramNameArg, objectArg) {
        if (!(typeof exports.obsItems[paramNameArg] === 'undefined')) {
            exports.obsItems[paramNameArg] = plugins.lodash.assign(exports.obsItems[paramNameArg], objectArg);
        }
        else {
            console.log('object is not present, so there is nothing to merge');
        }
    },
    get: function (keyName) {
        return exports.obsItems[keyName];
    },
    getAll: function () {
        return exports.obsItems;
    },
    addComplete: function (itemsArg) {
        exports.obsItems = plugins.lodash.assign(exports.obsItems, itemsArg);
        return exports.obsItems;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYub2JqZWN0c3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52Lm9iamVjdHN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBOEM7QUFFbkMsUUFBQSxRQUFRLEdBQVEsRUFBRSxDQUFBO0FBRTdCOztHQUVHO0FBQ1EsUUFBQSxHQUFHLEdBQVE7SUFDcEIsR0FBRyxFQUFFLFVBQVUsWUFBWSxHQUFHLFdBQVcsRUFBRSxTQUFTLEdBQUcsV0FBVztRQUNoRSxFQUFFLENBQUMsQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7WUFDckMsTUFBTSxDQUFBO1FBQ1IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxnQkFBUSxDQUFFLFlBQVksQ0FBRSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEQsZ0JBQVEsQ0FBRSxZQUFZLENBQUUsR0FBRyxTQUFTLENBQUE7UUFDdEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsQ0FBQyxDQUFBO1FBQ3hFLENBQUM7UUFDRCxNQUFNLENBQUMsZ0JBQVEsQ0FBRSxZQUFZLENBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBQ0QsT0FBTyxFQUFFLFVBQVUsWUFBWSxFQUFFLFNBQVM7UUFDeEMsZ0JBQVEsQ0FBRSxZQUFZLENBQUUsR0FBRyxTQUFTLENBQUE7SUFDdEMsQ0FBQztJQUNELEtBQUssRUFBRSxVQUFVLFlBQVksRUFBRSxTQUFTO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLGdCQUFRLENBQUUsWUFBWSxDQUFFLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELGdCQUFRLENBQUUsWUFBWSxDQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQVEsQ0FBRSxZQUFZLENBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUN2RixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxDQUFDLENBQUE7UUFDcEUsQ0FBQztJQUNILENBQUM7SUFDRCxHQUFHLEVBQUUsVUFBVSxPQUFPO1FBQ3BCLE1BQU0sQ0FBQyxnQkFBUSxDQUFFLE9BQU8sQ0FBRSxDQUFBO0lBQzVCLENBQUM7SUFDRCxNQUFNLEVBQUU7UUFDTixNQUFNLENBQUMsZ0JBQVEsQ0FBQTtJQUNqQixDQUFDO0lBQ0QsV0FBVyxFQUFFLFVBQVUsUUFBUTtRQUM3QixnQkFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDcEQsTUFBTSxDQUFDLGdCQUFRLENBQUE7SUFDakIsQ0FBQztDQUNGLENBQUEifQ==