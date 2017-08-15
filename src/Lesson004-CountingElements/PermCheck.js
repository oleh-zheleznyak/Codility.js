module.exports =
    function solution(A) {

        const TRUE = 1;
        const FALSE = 0;

        if (!(A instanceof Array)) throw new Error("A is not an array");
        if (A.length === 0) throw new Error("A is empty");
        if (A.length === 1) return A[0] === 1 ? TRUE : FALSE;

        const flagArray = [];

        for (var i = 0; i < A.length; i++)
            if (flagArray[A[i]] == undefined)
                flagArray[A[i]] = true;
            else return FALSE;

        const max = Math.max(...A);

        for (var i = 1; i <= max; i++)
            if (flagArray[i] == undefined) return FALSE;

        return TRUE;
    }