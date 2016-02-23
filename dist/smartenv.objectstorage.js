/// <reference path="typings/main.d.ts" />
var plugins = require("./smartenv.plugins");
var beautylog = require("beautylog");
exports.obs = {
    add: function (paramNameArg, objectArg) {
        if (paramNameArg === void 0) { paramNameArg = "undefined"; }
        if (objectArg === void 0) { objectArg = "undefined"; }
        if (paramNameArg == "undefined") {
            beautylog.error("paramName is undefined");
            return;
        }
        if (objectArg == "undefined") {
            beautylog.error("objectArg is undefined");
        }
        if (typeof exports.obsItems[paramNameArg] === "undefined") {
            exports.obsItems[paramNameArg] = objectArg;
        }
        else {
            beautylog.error("object is already present, so add operation has failed.");
        }
        return exports.obsItems[paramNameArg];
    },
    replace: function (paramNameArg, objectArg) {
        exports.obsItems[paramNameArg] = objectArg;
    },
    merge: function (paramNameArg, objectArg) {
        if (!(typeof exports.obsItems[paramNameArg] === "undefined")) {
            exports.obsItems[paramNameArg] = plugins._.assign(exports.obsItems[paramNameArg], objectArg);
        }
        else {
            beautylog.error("object is not present, so there is nothing to merge");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0ZW52Lm9iamVjdHN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDLElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFDL0MsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFCLFdBQUcsR0FBTztJQUNqQixHQUFHLEVBQUUsVUFBUyxZQUEwQixFQUFDLFNBQXVCO1FBQWxELDRCQUEwQixHQUExQiwwQkFBMEI7UUFBQyx5QkFBdUIsR0FBdkIsdUJBQXVCO1FBQzVELEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDMUIsU0FBUyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLGdCQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUEsQ0FBQztZQUMvQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixTQUFTLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUNELE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxPQUFPLEVBQUUsVUFBUyxZQUFZLEVBQUMsU0FBUztRQUNwQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsS0FBSyxFQUFFLFVBQVMsWUFBWSxFQUFDLFNBQVM7UUFDbEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE9BQU8sZ0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDakQsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLFlBQVksQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFNBQVMsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztRQUMzRSxDQUFDO0lBQ0wsQ0FBQztJQUNELEdBQUcsRUFBRSxVQUFTLE9BQU87UUFDakIsTUFBTSxDQUFDLGdCQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU0sRUFBRTtRQUNKLE1BQU0sQ0FBQyxnQkFBUSxDQUFDO0lBQ3BCLENBQUM7SUFDRCxXQUFXLEVBQUUsVUFBUyxRQUFRO1FBQzFCLGdCQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0JBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsZ0JBQVEsQ0FBQztJQUNwQixDQUFDO0NBQ0osQ0FBQztBQUNTLGdCQUFRLEdBQU8sRUFBRSxDQUFDIiwiZmlsZSI6InNtYXJ0ZW52Lm9iamVjdHN0b3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwidHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydGVudi5wbHVnaW5zXCIpO1xudmFyIGJlYXV0eWxvZyA9IHJlcXVpcmUoXCJiZWF1dHlsb2dcIik7XG5leHBvcnQgdmFyIG9iczphbnkgPSB7XG4gICAgYWRkOiBmdW5jdGlvbihwYXJhbU5hbWVBcmcgPSBcInVuZGVmaW5lZFwiLG9iamVjdEFyZyA9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHBhcmFtTmFtZUFyZyA9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcihcInBhcmFtTmFtZSBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iamVjdEFyZyA9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcihcIm9iamVjdEFyZyBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvYnNJdGVtc1twYXJhbU5hbWVBcmddID09PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgIG9ic0l0ZW1zW3BhcmFtTmFtZUFyZ10gPSBvYmplY3RBcmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiZWF1dHlsb2cuZXJyb3IoXCJvYmplY3QgaXMgYWxyZWFkeSBwcmVzZW50LCBzbyBhZGQgb3BlcmF0aW9uIGhhcyBmYWlsZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYnNJdGVtc1twYXJhbU5hbWVBcmddO1xuICAgIH0sXG4gICAgcmVwbGFjZTogZnVuY3Rpb24ocGFyYW1OYW1lQXJnLG9iamVjdEFyZyl7XG4gICAgICAgIG9ic0l0ZW1zW3BhcmFtTmFtZUFyZ10gPSBvYmplY3RBcmc7XG4gICAgfSxcbiAgICBtZXJnZTogZnVuY3Rpb24ocGFyYW1OYW1lQXJnLG9iamVjdEFyZyl7XG4gICAgICAgIGlmKCEodHlwZW9mIG9ic0l0ZW1zW3BhcmFtTmFtZUFyZ10gPT09IFwidW5kZWZpbmVkXCIpKXtcbiAgICAgICAgICAgIG9ic0l0ZW1zW3BhcmFtTmFtZUFyZ10gPSBwbHVnaW5zLl8uYXNzaWduKG9ic0l0ZW1zW3BhcmFtTmFtZUFyZ10sb2JqZWN0QXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlYXV0eWxvZy5lcnJvcihcIm9iamVjdCBpcyBub3QgcHJlc2VudCwgc28gdGhlcmUgaXMgbm90aGluZyB0byBtZXJnZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbihrZXlOYW1lKSB7XG4gICAgICAgIHJldHVybiBvYnNJdGVtc1trZXlOYW1lXTtcbiAgICB9LFxuICAgIGdldEFsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb2JzSXRlbXM7XG4gICAgfSxcbiAgICBhZGRDb21wbGV0ZTogZnVuY3Rpb24oaXRlbXNBcmcpIHtcbiAgICAgICAgb2JzSXRlbXMgPSBwbHVnaW5zLl8uYXNzaWduKG9ic0l0ZW1zLGl0ZW1zQXJnKTtcbiAgICAgICAgcmV0dXJuIG9ic0l0ZW1zO1xuICAgIH1cbn07XG5leHBvcnQgdmFyIG9ic0l0ZW1zOmFueSA9IHt9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
