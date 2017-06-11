'use strict';
module.exports =
    function solution(M, A) {

        var N = A.length;
        if (N < 2) return 1;
        if (M < 1) return 1;

        var map = new Map(); // this can either be a hash table, or an array with direct addressing

        var counter = N; // we have N distinct 1-element slices at minimum
        var tail = 0;
        var head = 0;

        while (head < N) {
            while (head < N && !map.has(A[head])) {
                map.set(A[head], head);
                head++;
            }

            let countOfElements = head - tail;
            if (countOfElements > 1) { // do not count 1-element slices
                let sumOfArithmeticProg = (1 + countOfElements) * countOfElements / 2;
                counter += sumOfArithmeticProg - countOfElements; // do not count 1-element slices
            }

            let newTail = map.get(A[head]) + 1;
            while (tail < newTail) {
                map.delete(A[tail]);
                tail++;
            }

        }

        return counter;
    }