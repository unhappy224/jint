/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-240.js
 * @description Object.create - 'get' property of one property in 'Properties' is own accessor property that overrides an inherited accessor property (8.10.5 step 7.a)
 */


function testcase() {
        var proto = {};

        Object.defineProperty(proto, "get", {
            get: function () {
                return function () {
                    return "inheritedAccessorProperty";
                };
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;
        var descObj = new ConstructFun();

        Object.defineProperty(descObj, "get", {
            get: function () {
                return function () {
                    return "ownAccessorProperty";
                };
            }
        });

        var newObj = Object.create({}, {
            prop: descObj 
        });

        return newObj.prop === "ownAccessorProperty";
    }
runTestCase(testcase);
