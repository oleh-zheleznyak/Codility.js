var assert = require('assert');
var solution = require('../src/TieRopes.js');

describe('TieRopes', function () {
    it('should produce correct number of tied ropes for Codility example', function () {
        const A = [1, 2, 3, 4, 1, 1, 3];
        const K = 4;

        const expected = 3;
        const actual = solution(K, A);

        assert.equal(actual, expected);
    });
});