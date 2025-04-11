const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

test1 = 4;
assert(fib(test1) == 3);

test2 = 7;
assert(fib(test2) == 13);

test3 = 13; 
assert(fib(test3) == 233);

test4 = 64;
assert(fib(test4) == 10610209857723)
