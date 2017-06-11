var assert = require('assert');
var solution = require('../../src/Lesson015-CaterpillarMethod/CountDistinctSlices.js');

function scenario(inputArray, maxElement, expected) {
    const actual = solution(maxElement, inputArray);
    assert.equal(actual, expected);
}

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('should compute number of distinct slices correctly for Codility example', function () {
        scenario([3, 4, 5, 5, 2], 6, 9);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('should return number of elements given all equal elements', function () {
        scenario([1, 1, 1], 1, 3);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('returns one for single element array', function () {
        scenario([1], 1, 1);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('returns arithmentic progression for array of distinct elements', function () {
        scenario([1, 2, 3, 4, 5], 5, 15);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('should return five on a three element mirrored array', function () {
        scenario([1, 2, 1], 2, 5);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('should return correct amount on a repetitive array', function () {
        scenario([1, 2, 1, 2], 2, 4 + 3);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('should return correct amount on an array that starts and ends with the same element', function () {
        scenario([1, 2, 3, 1], 3, 4 + 3 + 2);
    });
});

describe('Lesson 15 - Caterpillar method - CountDistinctSlices', function () {
    it('should return correct amount on an array that starts and ends with the same element', function () {
        scenario([1, 2, 3, 4, 1], 3, 5 + 4 + 3 + 2);
    });
});