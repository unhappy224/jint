/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-232.js
 * @description Object.create - 'get'  property of one property in 'Properties' is not present (8.10.5 step 7)
 */


function testcase() {

        var newObj = Object.create({}, {
            prop: {}
        });
        return typeof (newObj.prop) === "undefined";
    }
runTestCase(testcase);
