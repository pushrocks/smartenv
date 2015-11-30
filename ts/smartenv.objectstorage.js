/// <reference path="index.ts" />
var SmartenvObjectStorage;
(function (SmartenvObjectStorage) {
    function init() {
        var obs = {};
        var obsItems = {};
        obs.addItem = function (objectArg, paramName) {
            if (paramName === void 0) { paramName = "undefined"; }
            if (paramName == "undefined") {
                plugins.beautylog.error("paramName is undefined");
                return;
            }
            obsItems[paramName] = objectArg;
        };
        obs.getItem = function (keyName) {
            return obsItems[keyName];
        };
        obs.getComplete = function () {
            return obsItems;
        };
        obs.addComplete = function (itemsArg) {
            obsItems = plugins._.assign(obsItems, itemsArg);
            return obsItems;
        };
        return obs;
    }
    SmartenvObjectStorage.init = init;
})(SmartenvObjectStorage || (SmartenvObjectStorage = {}));
//# sourceMappingURL=smartenv.objectstorage.js.map