var assert = require('assert');
var solution = require('../src/TapeEquilibrium.js');

describe('TapeEquilibrium', function() {
    it('should return proper result on Codility sample test', function() {
      const input = [3,1,2,4,3];
      const expected = 1;

      var actual = solution(input);

      assert.equal(actual,expected);
    }); 
});

describe('TapeEquilibrium', function() {
    it('should throw on empty array', function() {
      assert.throws(()=>solution([]));
    }); 
});

describe('TapeEquilibrium', function() {
    it('should split in half when there are only 2 elements', function() {
      const input = [1,2];
      const expected = 1;
      
      var actual = solution(input);

      assert.equal(actual,expected);
    }); 
});