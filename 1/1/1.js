const { getDataFromFile } = require('../../utils/getDataFromFile');
const { doTheThing } = require('../utils.js');

(async () => {
  const data = await getDataFromFile('../data.txt');
  console.log(data.split('\n').map(datum => doTheThing(datum)).reduce((prev, curr) => prev += curr, 0));
})();

// console.log(
//   doTheThing(12) === 2 &&
//   doTheThing(14) === 2 &&
//   doTheThing(1969) === 654 &&
//   doTheThing(100756) === 33583
// );
