var test = require('unit.js');

function doThing(callback) {
    callback("error", "result");
    callback(null, "result");
}

function testResult(err, res) {
    console.log('Done!. err=', err, ' : res = ', res);

    if (err === null) {
        test.assert.equal(res, "result");
    } else {
        test.assert.equal(err, "error");
        test.assert.equal(res, undefined);
    }
};

function foo(callback) {
    doThing(function (error, result) {
        if (error) {
            callback(error);
            return;
        }
        callback(null, result);
    });
}

foo(testResult);

