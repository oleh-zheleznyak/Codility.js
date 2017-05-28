'use strict';
module.exports =
    function solution(A) {

        let N = A.length;
        let count = 0;

        if (N < 3) return count;

        A.sort((x, y) => x - y);

        for (let p = 0; p < N; p++) {
            let r = p + 2;
            for (let q = p + 1; q < N; q++) {
                while (r < N && A[p] + A[q] > A[r]) {
                    r++;
                }
                count += r - q - 1;
            }
        }

        return count;
    }