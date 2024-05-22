const fs = require('fs');

const saveToData = (DB) => {
  fs.writeFileSync('./db.json', JSON.stringify(DB, null, 2), {
    encoding: 'utf-8',
  });
};

module.exports = { saveToData };
