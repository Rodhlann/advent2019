const { getData, doTheThing } = require('../utils');

const nouns = Array(100).fill(null);
const verbs = Array(100).fill(null);
const solution = 19690720;

for(const [n, _] of nouns.entries()) {
  for (const [v, _] of verbs.entries()) {
    const arr = getData(n, v);
    if (doTheThing(arr)[0] === solution) {
      console.log('result:', 100 * n + v);
      return;
    }
  }
}