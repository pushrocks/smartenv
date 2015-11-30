/// <reference path="index.ts" />
module SmartenvObjectStorage {
    export function init() {
        var obs:any = {};
        var obsItems:any = {};
        obs.addItem = function(objectArg,paramName = "undefined") {
            if (paramName == "undefined"){
                plugins.beautylog.error("paramName is undefined");
                return;
            }
            obsItems[paramName] = objectArg;
        };
        obs.getItem = function(keyName) {
            return obsItems[keyName];
        };
        obs.getComplete = function () {
            return obsItems;
        }

        obs.addComplete = function(itemsArg) {
            obsItems = plugins._.assign(obsItems,itemsArg);
            return obsItems;
        };
        return obs;
    }
}