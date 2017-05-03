'use strict';
module.exports =
    function solution(S) {
        const proper_nesting = 1;
        const invalid_nesting = 0;

        if (S.length === 0)
            return proper_nesting;

        const isOpeningBracket = function isOpeningBracket(char) {
            if (char === "(" || char === "{" || char === "[")
                return true;
            return false;
        }

        const isClosingBracket = function isClosingBracket(char) {
            if (char === ")" || char === "}" || char === "]")
                return true;
            return false;
        }

        const isMatchingPair = function isMatchingPair(left, right) {
            if (left === "(") return right === ")";
            else if (left === "[") return right === "]";
            else if (left === "{") return right === "}";
            else return false;
        }

        let stack = [];
        stack.peek = function () {
            return stack[stack.length - 1];
        };

        for (let i = 0; i < S.length; i++) {

            if (isOpeningBracket(S[i]))
                stack.push(S[i]);
            else if (stack.length > 0 && isClosingBracket(S[i]) && isMatchingPair(stack.peek(), S[i]))
                stack.pop();
            else
                return invalid_nesting;
        }

        if (stack.length === 0)
            return proper_nesting;
        else
            return invalid_nesting;
    }