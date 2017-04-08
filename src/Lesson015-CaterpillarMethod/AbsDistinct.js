module.exports =
    function solution(A) {

        if (A.length < 2)
            return A.length;

        const cat = {
            head: A.length - 1,
            tail: 0,
            count: 0,
            previousIndex: null,
            lastBalanced : null,
            canShrink: function () { return this.head > this.tail; },
            bigHead: function () { return Math.abs(A[this.head]) > Math.abs(A[this.tail]); },
            balanced: function () { return Math.abs(A[this.head]) === Math.abs(A[this.tail]); },
            sameAbs: function (i, j) { return Math.abs(A[j]) === Math.abs(A[i]); }
        };

        while (cat.canShrink()) {
            if (cat.bigHead()) {
                cat.previousIndex = cat.head;
                cat.lastBalanced = false;
                if (!cat.sameAbs(cat.head, --cat.head))
                    cat.count++;
            }
            else if (cat.balanced()) {
                cat.previousIndex = cat.head;
                cat.lastBalanced = true;
                if (!cat.sameAbs(cat.head, --cat.head) & !cat.sameAbs(cat.tail, ++cat.tail))
                    cat.count++;
            }
            else // big tail
            {
                cat.previousIndex = cat.tail;
                cat.lastBalanced = false;
                if (!cat.sameAbs(cat.tail, ++cat.tail))
                    cat.count++;
            }
        }

        if (cat.head == cat.tail) {
            if (!cat.sameAbs(cat.head, cat.previousIndex) || cat.lastBalanced)
                cat.count++;
        }
        else if (cat.head < cat.tail) {
            cat.count++;
        }

        if (cat.count == 0)
            cat.count++;

        return cat.count;
    }