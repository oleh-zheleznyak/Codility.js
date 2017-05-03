'use strict';
module.exports =
    function solution(S) {
        const proper_nesting = 1;
        const invalid_nesting = 0;

        if (S.length === 0)
            return proper_nesting;

        const openingSet = new Set(["(", "[", "{"]);
        const closingSet = new Set([")", "]", "}"]);
        const map = new Map();
        map.set("(", ")");
        map.set("[", "]");
        map.set("{", "}");

        let stack = [];
        stack.peek = function () {
            return stack[stack.length - 1];
        };

        const isMatchingLastInStack = function (char) {
            return stack.length > 0 && closingSet.has(char) && map.get(stack.peek()) === char;
        };

        for (let i = 0; i < S.length; i++) {

            if (openingSet.has(S[i]))
                stack.push(S[i]);
            else if (isMatchingLastInStack(S[i]))
                stack.pop();
            else
                return invalid_nesting;
        }

        if (stack.length === 0)
            return proper_nesting;
        else
            return invalid_nesting;
    }