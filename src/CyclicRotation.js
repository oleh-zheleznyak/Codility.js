module.exports =
function solution(A, K) {
    if ( A.length <=1)
        return A;
    if ( K % A.length === 0)
        return A;

    K %=A.length;

    return A.slice(A.length - K,A.length).concat(A.slice(0,A.length - K));
}