const { getData, doTheThing } = require('../utils');

const arr = getData(12, 2);
console.log(doTheThing(arr)[0]);

// console.log(JSON.stringify(doTheThing([1,0,0,0,99])) === JSON.stringify([2,0,0,0,99]), doTheThing([1,0,0,0,99]));
// console.log(JSON.stringify(doTheThing([2,3,0,3,99])) === JSON.stringify([2,3,0,6,99]), doTheThing([2,3,0,3,99]));
// console.log(JSON.stringify(doTheThing([2,4,4,5,99,0])) === JSON.stringify([2,4,4,5,99,9801]), doTheThing([2,4,4,5,99,0]));
// console.log(JSON.stringify(doTheThing([1,1,1,4,99,5,6,0,99])) === JSON.stringify([30,1,1,4,2,5,6,0,99]), doTheThing([1,1,1,4,99,5,6,0,99]));
