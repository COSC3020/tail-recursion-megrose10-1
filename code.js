function fib(n) {
    //If n is 0, return 0
    if(n == 0) {
        return 0;
    }
    //Recursive call must be last edit
    return fib_acc(n, 0, 1);
}

function fib_acc(n, accOne, accTwo) {
    //console.log("n: " + n);
    //console.log("accTwo: " + accTwo);
    //When n is <= 1, return fib number
    if(n <= 1) {
        return accTwo;
    }
    //console.log("accOne: " + accOne);
    //Calculate the next fib number by adding accOne and accTwo
    return fib_acc(n - 1, accTwo, accOne + accTwo);
}
