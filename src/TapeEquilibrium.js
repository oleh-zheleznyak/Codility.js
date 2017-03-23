'use strict';
module.exports =
    function solution(A) {

        if (A == undefined || A == null || A.constructor !== Array || A.length < 1)
            throw new Error("invalid argument");

        const sum = A.reduce((x, y) => x + y, 0);
        var min = Number.POSITIVE_INFINITY;
        var prefixSum = A[0];

        for (var i = 1; i < A.length; i++) {
            let diff = Math.abs(prefixSum - (sum - prefixSum));
            min = Math.min(min,diff);
            prefixSum += A[i];
            
        }

        return min;
    }