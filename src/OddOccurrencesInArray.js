module.exports = 
function solution(A) {

    if (A == undefined || A == null || A.constructor !== Array || A.length<1 || A.length % 2 == 0 )
        throw new Error("invalid argument");

    var num = A[0];

    for (var i=1; i<A.length; i++)
    {
        num ^= A[i];
    }

    return num;
}