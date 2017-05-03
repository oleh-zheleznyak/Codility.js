'use strict';
var assert = require('assert');
var solution = require('../../src/Lesson007-StacksAndQueues/Brackets.js');

function scenario(inputString, expected) {
    const actual = solution(inputString);
    assert.equal(actual, expected);
}

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect nesting correctly for positive Codility example', function () {
        scenario("{[()()]}", 1);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('pairs of all brackets are valid nesting', function () {
        scenario("()[]{}", 1);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('one pair of brackets is valid nesting', function () {
        scenario("()", 1);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('empty string is valid nesting', function () {
        scenario("", 1);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect nesting correctly for negative Codility example', function () {
        scenario("([)()]", 0);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect incorrect nesting given only opening brackets', function () {
        scenario("(({[{{[[((", 0);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect incorrect nesting given only closing brackets', function () {
        scenario("]]}))}}}])", 0);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect incorrect nesting given some invalid symbols', function () {
        scenario("(foo[]bar{})", 0);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect incorrect nesting given missing closing bracket', function () {
        scenario("()[[]]{", 0);
    });
});

describe('Lesson 7 - Stacks and Queues - Brackets', function () {
    it('should detect incorrect nesting given intersecting brackets', function () {
        scenario("([)]", 0);
    });
});