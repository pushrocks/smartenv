/// <reference path="typings/main.d.ts" />
exports.getEnvString = function () {
    if (typeof window !== "undefined") {
        return "browser";
    }
    else if (typeof process !== "undefined") {
        return "node";
    }
};
exports.getUserAgentString = function () {
    if (exports.isBrowser()) {
        return navigator.userAgent;
    }
    else {
        return undefined;
    }
};
exports.isNode = function () {
    if (exports.getEnvString() === "node") {
        return true;
    }
    else {
        return false;
    }
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
exports.isTravis = function () {
    if (process.env.TRAVIS) {
        return true;
    }
    else {
        return false;
    }
    ;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0ZW52LmNsYXNzZXMuaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFFL0Isb0JBQVksR0FBRztJQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVTLDBCQUFrQixHQUFHO0lBQzVCLEVBQUUsQ0FBQSxDQUFDLGlCQUFTLEVBQUUsQ0FBQyxDQUFBLENBQUM7UUFDWixNQUFNLENBQUUsU0FBUyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFUyxjQUFNLEdBQUc7SUFDaEIsRUFBRSxDQUFDLENBQUMsb0JBQVksRUFBRSxLQUFLLE1BQU0sQ0FBQyxDQUFBLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFUyxzQkFBYyxHQUFHO0lBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVTLGlCQUFTLEdBQUc7SUFDbkIsTUFBTSxDQUFDLENBQUMsY0FBTSxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRVMsWUFBSSxHQUFHO0lBQ2QsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRVMsZ0JBQVEsR0FBRztJQUNsQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFBQSxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0ZW52LmNsYXNzZXMuaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJ0eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmV4cG9ydCB2YXIgZ2V0RW52U3RyaW5nID0gZnVuY3Rpb24oKTpzdHJpbmcge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBcImJyb3dzZXJcIjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBcIm5vZGVcIjtcbiAgICB9XG59O1xuXG5leHBvcnQgdmFyIGdldFVzZXJBZ2VudFN0cmluZyA9IGZ1bmN0aW9uKCk6c3RyaW5ne1xuICAgIGlmKGlzQnJvd3NlcigpKXtcbiAgICAgICAgcmV0dXJuICBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxuZXhwb3J0IHZhciBpc05vZGUgPSBmdW5jdGlvbigpOmJvb2xlYW4ge1xuICAgIGlmIChnZXRFbnZTdHJpbmcoKSA9PT0gXCJub2RlXCIpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuZXhwb3J0IHZhciBnZXROb2RlVmVyc2lvbiA9IGZ1bmN0aW9uKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gcHJvY2Vzcy52ZXJzaW9uO1xufTtcblxuZXhwb3J0IHZhciBpc0Jyb3dzZXIgPSBmdW5jdGlvbigpOmJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNOb2RlKCk7XG59O1xuXG5leHBvcnQgdmFyIGlzQ0kgPSBmdW5jdGlvbigpe1xuICAgIGlmKHByb2Nlc3MuZW52LkNJKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59O1xuXG5leHBvcnQgdmFyIGlzVHJhdmlzID0gZnVuY3Rpb24oKXtcbiAgICBpZihwcm9jZXNzLmVudi5UUkFWSVMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9