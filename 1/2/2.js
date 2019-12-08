const { getDataFromFile } = require('../../utils/getDataFromFile');
const { doTheThing } = require('../utils');

const recurseTheThing = (number) => number > 0 ? number + recurseTheThing(doTheThing(number)) : 0;
const solveTheProblem = (number) => recurseTheThing(doTheThing(number));

(async () => {
  const data = await getDataFromFile('../data.txt');
  console.log(data.split('\n').map(datum => solveTheProblem(datum)).reduce((prev, curr) => prev += curr, 0));
})();

// console.log(solveTheProblem(1969));
// console.log(
//   solveTheProblem(14) === 2 && 
//   solveTheProblem(1969) === 966 &&
//   solveTheProblem(100756) === 50346
// );