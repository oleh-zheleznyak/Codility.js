var assert = require('assert');
var solution = require('../../src/Lesson004-CountingElements/MaxCounters.js');

function scenario(amountOfCounters, signalArray, expectedCounterValues) {
    const actual = solution(amountOfCounters, signalArray);
    assert.deepEqual(actual, expectedCounterValues);
}

describe('Lesson 4 - Counting Elements - MaxCounters', function () {
    it('one counter one signal', function () {
        scenario(1, [1], [1]);
    });
});

describe('Lesson 4 - Counting Elements - MaxCounters', function () {
    it('one counter and only one (max) signal', function () {
        scenario(1, [2], [0]);
    });
});

describe('Lesson 4 - Counting Elements - MaxCounters', function () {
    it('one counter and mixed signals', function () {
        scenario(1, [1,2,2,2,1], [2]);
    });
});

describe('Lesson 4 - Counting Elements - MaxCounters', function () {
    it('two counters and only individual signals', function () {
        scenario(2, [1, 2, 1], [2, 1]);
    });
});

describe('Lesson 4 - Counting Elements - MaxCounters', function () {
    it('two counters and only max signals', function () {
        scenario(2, [3, 3], [0,0]);
    });
});

describe('Lesson 4 - Counting Elements - MaxCounters', function () {
    it('two counters and mixed signals', function () {
        scenario(2, [1, 3, 1], [2, 1]);
    });
});
