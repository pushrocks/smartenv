"use strict";
const plugins = require("./smartenv.plugins");
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
            exports.obsItems[paramNameArg] = plugins._.assign(exports.obsItems[paramNameArg], objectArg);
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
        exports.obsItems = plugins._.assign(exports.obsItems, itemsArg);
        return exports.obsItems;
    }
};
exports.obsItems = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYub2JqZWN0c3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52Lm9iamVjdHN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUNuQyxRQUFBLEdBQUcsR0FBUTtJQUNsQixHQUFHLEVBQUUsVUFBUyxZQUFZLEdBQUcsV0FBVyxFQUFDLFNBQVMsR0FBRyxXQUFXO1FBQzVELEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUNyQyxNQUFNLENBQUE7UUFDVixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ3pDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLGdCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoRCxnQkFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQTtRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxDQUFDLENBQUE7UUFDMUUsQ0FBQztRQUNELE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFDRCxPQUFPLEVBQUUsVUFBUyxZQUFZLEVBQUMsU0FBUztRQUNwQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQTtJQUN0QyxDQUFDO0lBQ0QsS0FBSyxFQUFFLFVBQVMsWUFBWSxFQUFDLFNBQVM7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sZ0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9FLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQTtRQUN0RSxDQUFDO0lBQ0wsQ0FBQztJQUNELEdBQUcsRUFBRSxVQUFTLE9BQU87UUFDakIsTUFBTSxDQUFDLGdCQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUNELE1BQU0sRUFBRTtRQUNKLE1BQU0sQ0FBQyxnQkFBUSxDQUFBO0lBQ25CLENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBUyxRQUFRO1FBQzFCLGdCQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QyxNQUFNLENBQUMsZ0JBQVEsQ0FBQTtJQUNuQixDQUFDO0NBQ0osQ0FBQTtBQUNVLFFBQUEsUUFBUSxHQUFRLEVBQUUsQ0FBQSJ9