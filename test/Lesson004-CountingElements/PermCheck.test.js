var assert = require('assert');
var solution = require('../../src/Lesson004-CountingElements/PermCheck.js');

function scenario(inputArray, expected) {
    const actual = solution(inputArray);
    assert.equal(actual, expected);
}

describe('Lesson 4 - Counting Elements - PermCheck', function () {
    it('array with single element of 1 is a permutation', function () {
        scenario([1], true);
    });
});

describe('Lesson 4 - Counting Elements - PermCheck', function () {
    it('array with single element bigger than 1 is not a permutation', function () {
        scenario([2], false);
    });
});

describe('Lesson 4 - Counting Elements - PermCheck', function () {
    it('consequent numbers should be a permutation', function () {
        scenario([1,2,3,4], true);
    });
});

describe('Lesson 4 - Counting Elements - PermCheck', function () {
    it('sequence with gaps is not a permutation', function () {
        scenario([1,3], false);
    });
});

describe('Lesson 4 - Counting Elements - PermCheck', function () {
    it('sequence cannot contain repetitions', function () {
        scenario([1,1], false);
    });
});
