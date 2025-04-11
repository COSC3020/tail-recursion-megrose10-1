function fib(n) {
    if(n == 0) {
        return 0;
    }
    return fib_acc(n, 0, 1);
}

function fib_acc(n, accOne, accTwo) {
    //console.log("n: " + n);
    //console.log("accTwo: " + accTwo);
    if(n <= 1) {
        return accTwo;
    }
    //console.log("accOne: " + accOne);
    return fib_acc(n - 1, accTwo, accOne + accTwo);
}

//console.log(fib(4));
//console.log(fib(0));
//console.log(fib(7));
