'use strict';
module.exports =
    function solution(M, A) {

        var N = A.length;
        if (N < 2) return 1;
        if (M < 1) return 1;

        var counter = 0;
        let head = 0;
        let tail = 0;
        let firstOccurence = [];
        const maxResult = 1000000000;

        while (tail < N && tail <= head) {
            while (head < N) {
                if (firstOccurence[A[head]] == undefined) {
                    firstOccurence[A[head]] = head;
                    head++;
                }
                else {
                    break;
                }
            }

            let newTail = firstOccurence[A[head]] != undefined ?
                firstOccurence[A[head]] :
                N;

            while (tail <= newTail) {
                let length = head - tail;
                counter += length;

                if (counter > maxResult) return maxResult;

                firstOccurence[A[tail]] = undefined;
                tail++;
            }
        }

        return counter;
    }