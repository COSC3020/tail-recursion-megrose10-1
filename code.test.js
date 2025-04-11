const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

test1 = 4;
assert(tsp_hk(test1) == 3);

test2 = 7;
assert(tsp_hk(test2) == 13);

test3 = 13; 
assert(tsp_hk(test3) == 233);

test4 = 64;
assert(tsp_hk(test4) == 10610209857723)
