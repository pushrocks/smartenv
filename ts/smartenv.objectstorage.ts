/// <reference path="index.ts" />
module SmartenvObjectStorage {
    export function init() {
        var obs:any = {};
        var obsItems:any = {};
        obs.add = function(paramNameArg = "undefined",objectArg = "undefined") {
            if (paramNameArg == "undefined"){
                plugins.beautylog.error("paramName is undefined");
                return;
            }
            if (objectArg == "undefined"){
                plugins.beautylog.error("objectArg is undefined");
            }
            obsItems[paramNameArg] = objectArg;
        };
        obs.get = function(keyName) {
            return obsItems[keyName];
        };
        obs.getAll = function () {
            return obsItems;
        }

        obs.addComplete = function(itemsArg) {
            obsItems = plugins._.assign(obsItems,itemsArg);
            return obsItems;
        };
        return obs;
    }
}