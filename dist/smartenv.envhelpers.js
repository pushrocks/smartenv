"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvString = function () {
    if (typeof window !== 'undefined') {
        return 'browser';
    }
    else if (typeof process !== 'undefined') {
        return 'node';
    }
};
/**
 * gets the user agent string in a browser
 */
exports.getUserAgentString = function () {
    if (exports.isBrowser()) {
        return navigator.userAgent;
    }
    else {
        return 'undefined';
    }
};
exports.isNode = function () {
    return exports.getEnvString() === 'node';
};
exports.getNodeVersion = function () {
    return process.version;
};
exports.isBrowser = function () {
    return !exports.isNode();
};
exports.isCI = function () {
    if (process.env.CI) {
        return true;
    }
    else {
        return false;
    }
    ;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRlbnYuZW52aGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0ZW52LmVudmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDVyxRQUFBLFlBQVksR0FBRztJQUN4QixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDbEIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7SUFDZixDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLEVBQUUsQ0FBQyxDQUFDLGlCQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUE7SUFDNUIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLFdBQVcsQ0FBQTtJQUNwQixDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBRVUsUUFBQSxNQUFNLEdBQUc7SUFDbEIsTUFBTSxDQUFDLG9CQUFZLEVBQUUsS0FBSyxNQUFNLENBQUE7QUFDbEMsQ0FBQyxDQUFBO0FBRVUsUUFBQSxjQUFjLEdBQUc7SUFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUE7QUFDeEIsQ0FBQyxDQUFBO0FBRVUsUUFBQSxTQUFTLEdBQUc7SUFDckIsTUFBTSxDQUFDLENBQUMsY0FBTSxFQUFFLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBRVUsUUFBQSxJQUFJLEdBQUc7SUFDaEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDYixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixNQUFNLENBQUMsS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUFBLENBQUM7QUFDSixDQUFDLENBQUEifQ==