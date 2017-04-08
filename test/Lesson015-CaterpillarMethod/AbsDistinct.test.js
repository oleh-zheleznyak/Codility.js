var assert = require('assert');
var solution = require('../../src/Lesson015-CaterpillarMethod/AbsDistinct.js');

function scenario(inputArray, expected) {
    const actual = solution(inputArray);
    assert.equal(actual, expected);
}

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('should compute number of absolute distinct elements correctly for Codility example', function () {
        scenario([-5, -3, -1, 0, 3, 6], 5);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('returns zero for empty array', function () {
        scenario([], 0);
    });
});


describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('returns one for single element array', function () {
        scenario([1], 1);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('returns one if all elements are the same', function () {
        scenario([2, 2, 2], 1);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('detects elements repeated odd number of times', function () {
        scenario([-2, -1, 1, 1, 2], 2);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('can count numbers repeated even times in the middle', function () {
        scenario([-2, -2, 1, 1, 2], 2);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('counts elements by absolute value', function () {
        scenario([-2, 2], 1);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('counts distinct elements - if all elements are distinct', function () {
        scenario([1, 2, 3, 4, 5], 5);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('detects elements equal by absolute value if other elements are between them', function () {
        scenario([-1, 0, 1], 2);
    });
});

describe('Lesson 15 - Caterpillar method - AbsDistinct', function () {
    it('detects elements equal by absolute value if other elements are between them - several values', function () {
        scenario([-2, -1, 0, 1, 2], 3);
    });
});