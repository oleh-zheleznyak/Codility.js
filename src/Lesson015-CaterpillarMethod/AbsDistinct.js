module.exports =
    function solution(A) {

        if (A.length < 2)
            return A.length;

        const cat = {
            head: A.length,
            tail: 0,
            canShrink = function () {
                return head > tail;
            },
            bigHead = function () {
                return Math.abs(A[head]) > Math.abs(A[tail]);
            },
            balanced = function() {
                return Math.abs(A[head]) === Math.abs(A[tail]);
            },
            shrinkHead = function() {
                head--;
                return A[head+1]===A[head]
            }
        };

        var count = 0;

        while (cat.canShrink()) {
            if (cat.bigHead());

        }

        return count;
    }