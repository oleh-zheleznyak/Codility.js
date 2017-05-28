var assert = require('assert');
var solution = require('../../src/Lesson015-CaterpillarMethod/CountTriangles.js');

function scenario(inputArray, expected) {
    const actual = solution(inputArray);
    assert.equal(actual, expected);
}

describe('Lesson 15 - Caterpillar method - CountTriangles', function () {
    it('should compute number of triangles correctly for Codility example', function () {
        scenario([10, 2, 5, 1, 8, 12], 4);
    });
});

describe('Lesson 15 - Caterpillar method - CountTriangles', function () {
    it('should return zero given less than three elements', function () {
        scenario([1, 2], 0);
    });
});

describe('Lesson 15 - Caterpillar method - CountTriangles', function () {
    it('should return zero given empty array', function () {
        scenario([], 0);
    });
});