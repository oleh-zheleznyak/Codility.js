module.exports =
    function solution(A) {

        // TODO: refactor - after first call the object will be in inconsistent state
        const cat = {
            head: A.length - 1,
            tail: 0,
            count: 0,
            previousIndex: null,
            previousBalanced: null,
            canShrink: function () { return this.head > this.tail; },
            bigHead: function () { return Math.abs(A[this.head]) > Math.abs(A[this.tail]); },
            balanced: function () { return Math.abs(A[this.head]) === Math.abs(A[this.tail]); },
            differentAbs: function (i, j) { return Math.abs(A[j]) !== Math.abs(A[i]); },
            countDistinctElementsByAbsoluteValue: function () {

                if (A.length < 2)
                    return A.length;

                while (this.canShrink()) {
                    if (this.bigHead()) {
                        this.previousIndex = this.head;
                        this.previousBalanced = false;
                        if (this.differentAbs(this.head, --this.head))
                            this.count++;
                    }
                    else if (this.balanced()) {
                        this.previousIndex = this.head;
                        this.previousBalanced = true;
                        if (this.differentAbs(this.head, --this.head) & this.differentAbs(this.tail, ++this.tail))
                            this.count++;
                    }
                    else // big tail
                    {
                        this.previousIndex = this.tail;
                        this.previousBalanced = false;
                        if (this.differentAbs(this.tail, ++this.tail))
                            this.count++;
                    }
                }

                if (this.head === this.tail) {
                    if (this.differentAbs(this.head, this.previousIndex) || this.previousBalanced)
                        this.count++;
                }
                else if (this.head < this.tail) {
                    this.count++;
                }

                if (this.count === 0)
                    this.count++;

                return this.count;
            }
        };

        return cat.countDistinctElementsByAbsoluteValue();

    }