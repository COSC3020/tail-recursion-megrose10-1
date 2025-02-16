const fs = require('fs');
const jsc = require('jsverify');

// Read in the target code (the tail recursive Fibonacci function)
eval(fs.readFileSync('code.js') + '');  // Assuming the tail recursive `fib` is in 'code.js'

// Reference solution for Fibonacci using a simple iterative approach
function fibTest(n) {
    var fib_solns = [0];  // Fibonacci array initialized with 0 at index 0
    if (n == 0) return fib_solns;  // Return the array for n=0
    fib_solns[1] = 1;  // Fibonacci of 1 is 1
    if (n == 1) return fib_solns;  // Return the array for n=1
    for (var i = 2; i <= n; i++) {
        fib_solns[i] = fib_solns[i-1] + fib_solns[i-2];  // Calculate Fibonacci values iteratively
    }
    return fib_solns[n];  // Return the Fibonacci value at index n
}

// JSVerify property test
const test = jsc.forall("nat", function(n) {
    // Compare the result of the tail-recursive Fibonacci with the iterative one
    return JSON.stringify(fib(n)) === JSON.stringify(fibTest(n));
});

// Run the test and assert the result
jsc.assert(test);
