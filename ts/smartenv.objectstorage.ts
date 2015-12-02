/// <reference path="index.ts" />
module SmartenvObjectStorage {
    export function init() {
        var obs:any = {};
        var obsItems:any = {};
        obs.add = function(objectArg,paramName = "undefined") {
            if (paramName == "undefined"){
                plugins.beautylog.error("paramName is undefined");
                return;
            }
            obsItems[paramName] = objectArg;
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