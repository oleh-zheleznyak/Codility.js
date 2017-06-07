'use strict';
module.exports =
    function solution(M, A) {

        var N = A.length;
        if (N < 2) return 1;
        if (M < 1) return 1;

        var set = new Set(); // this can either be a hash table, or an array with direct addressing

        var counter = 0;
        var tail = 0;
        var head = 0;

        while (head < N) {
            while (head < N && !set.has(A[head])) {
                set.add(A[head]);
                head++;
            }
            let countOfElements = head - tail;
            let sumOfArithmeticProg = (1 + countOfElements) * countOfElements / 2;

            counter += sumOfArithmeticProg;
            tail = head;
            set.clear();
        }

        return counter;
    }