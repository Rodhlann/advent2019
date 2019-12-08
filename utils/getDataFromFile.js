const fs = require('fs').promises;

exports.getDataFromFile = async (path) => {
  return await fs.readFile(path, "utf8");
};
