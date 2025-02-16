function fib(n) {
    if(n == 0) {
        return 1;
    }
    return fib_acc(n, 1, 1);
}

function fib_acc(n, accOne, accTwo) {
    //console.log(accTwo);
    if(n <= 2) {
        return accTwo;
    }
    //console.log(accOne);
    return fib_acc(n - 1, accTwo, accOne + accTwo);
}

console.log(fib(4));
console.log(fib(0));
console.log(fib(7));
