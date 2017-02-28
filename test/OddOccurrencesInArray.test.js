var assert = require('assert');
var solution = require('../src/OddOccurrencesInArray.js');

describe('OddOccurrencesInArray', function() {
    it('should throw an error given number', function() {
      assert.throws(()=>solution(42));
    });
});

describe('OddOccurrencesInArray', function() {
    it('should throw an error given null', function() {
      assert.throws(()=>solution(null));
    });
});

describe('OddOccurrencesInArray', function() {
    it('should throw an error given undefined', function() {
      assert.throws(()=>solution(undefined));
    });
});

describe('OddOccurrencesInArray', function() {
    it('should throw an error given empty array', function() {
      assert.throws(()=>solution([]));
    });
});

describe('OddOccurrencesInArray', function() {
    it('should throw an error given odd number of elements', function() {
      assert.throws(()=>solution([1,2]));
    });
});

describe('OddOccurrencesInArray', function() {
    it('should return the number given 1 element array', function() {
      const singleNumber = 42;
      assert.equal(solution([singleNumber]),singleNumber);
    });
});

describe('OddOccurrencesInArray', function() {
    it('should return unique item in an array', function() {
      assert.equal(solution([1,1,2]),2);
    });
});

describe('OddOccurrencesInArray', function() {
    it('should return proper result on Codility sample test', function() {
      assert.equal(solution([9, 3, 9, 3, 9, 7, 9]),7);
    });
});