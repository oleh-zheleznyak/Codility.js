var assert = require('assert');
var solution = require('../src/CyclicRotation.js');

describe('CyclicRotation', function() {
    it('should return the same array if rotation is zero', function() {
      const input = [1,2,3];
      const rotation = 0;

      var actual = solution(input, rotation);

      assert.deepEqual(actual,input);
    });
});

describe('CyclicRotation', function() {
    it('should not change empty array', function() {
      const input = [];
      const rotation = 3;

      var actual = solution(input, rotation);

      assert.deepEqual(actual,input);
    });
});


describe('CyclicRotation', function() {
    it('should not change empty array', function() {
      const input = [42];
      const rotation = 3;

      var actual = solution(input, rotation);

      assert.deepEqual(actual,input);
    });
});

describe('CyclicRotation', function() {
    it('should rotate array properly as in Codility example', function() {
      const input = [3, 8, 9, 7, 6];
      const rotation = 3;

      var expected = [9, 7, 6, 3, 8];
      var actual = solution(input, rotation);

      assert.deepEqual(actual,expected);
    });
});