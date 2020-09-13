const fs = require('fs');

const dirExport = '__sapper__/export';
const missingFile = ['404', 'offline'];

missingFile.forEach(fileName => {
  const oldPath = `${dirExport}/${fileName}/index.html`;
  const newPath = `${dirExport}/${fileName}.html`;

  fs.rename(oldPath, newPath, err => {
    if (err) throw err;
  });
});
