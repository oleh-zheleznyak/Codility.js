module.exports =
    function solution(A) {

        if (A.length < 2)
            return A.length;

        const cat = {
            head: A.length - 1,
            tail: 0,
            count: 0,
            previousIndex: null,
            previousBalanced : null,
            canShrink: function () { return this.head > this.tail; },
            bigHead: function () { return Math.abs(A[this.head]) > Math.abs(A[this.tail]); },
            balanced: function () { return Math.abs(A[this.head]) === Math.abs(A[this.tail]); },
            differentAbs: function (i, j) { return Math.abs(A[j]) !== Math.abs(A[i]); },
        };

        while (cat.canShrink()) {
            if (cat.bigHead()) {
                cat.previousIndex = cat.head;
                cat.previousBalanced = false;
                if (cat.differentAbs(cat.head, --cat.head))
                    cat.count++;
            }
            else if (cat.balanced()) {
                cat.previousIndex = cat.head;
                cat.previousBalanced = true;
                if (cat.differentAbs(cat.head, --cat.head) & cat.differentAbs(cat.tail, ++cat.tail))
                    cat.count++;
            }
            else // big tail
            {
                cat.previousIndex = cat.tail;
                cat.previousBalanced = false;
                if (cat.differentAbs(cat.tail, ++cat.tail))
                    cat.count++;
            }
        }

        if (cat.head === cat.tail) {
            if (cat.differentAbs(cat.head, cat.previousIndex) || cat.previousBalanced)
                cat.count++;
        }
        else if (cat.head < cat.tail) {
            cat.count++;
        }

        if (cat.count === 0)
            cat.count++;

        return cat.count;
    }