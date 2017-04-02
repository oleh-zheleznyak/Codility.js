var assert = require('assert');
var solution = require('../src/MaxNonoverlappingSegments.js');

describe('MaxNonoverlappingSegments', function () {
    it('should compute maximum count of non-intersecting segments correctly for Codility example', function () {
        const A = [1, 3, 7, 9, 9];
        const B = [5, 6, 8, 9, 10];

        var expected = 3;
        var actual = solution(A, B);

        assert.equal(actual, expected);
    });
});

describe('MaxNonoverlappingSegments', function () {
    it('should return zero for empty arrays', function () {
        const A = [];
        const B = [];

        var expected = 0;
        var actual = solution(A, B);

        assert.equal(actual, expected);
    });
});

describe('MaxNonoverlappingSegments', function () {
    it('should return one for single element', function () {
        const A = [1];
        const B = [2];

        var expected = 1;
        var actual = solution(A, B);

        assert.equal(actual, expected);
    });
});

describe('MaxNonoverlappingSegments', function () {
    it('should return one if all elements intersect', function () {
        const A = [1,2,3,4,5];
        const B = [5,5,5,5,5];

        var expected = 1;
        var actual = solution(A, B);

        assert.equal(actual, expected);
    });
});