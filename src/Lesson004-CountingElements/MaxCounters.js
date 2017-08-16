module.exports =
    function solution(N, A) {

        if (N == 0) return [];
        const counters = new Array(N);
        if (A.length == 0) return counters;

        var max = 0;
        var lastMaxCounter = 0;
        for (var i = 0; i < N; i++) counters[i] = 0;

        for (var i = 0; i < A.length; i++) {
            if (A[i] <= N) {

                var index = A[i] - 1;
                counters[index] = Math.max(lastMaxCounter, counters[index]);
                counters[index]++;
                max = Math.max(max, counters[index]);
            }
            else
                lastMaxCounter = max;
        }

        for (var j = 0; j < counters.length; j++)
            counters[j] = Math.max(lastMaxCounter, counters[j]);

        return counters;
    }