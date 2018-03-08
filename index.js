const fs = require('fs');
const { Observable } = require('rxjs');

const exists = Observable.bindCallback(fs.exists);
const readFile = Observable.bindNodeCallback(fs.readFile);
const writeFile = Observable.bindNodeCallback(fs.writeFile);

module.exports = {
  exists,
  readFile,
  writeFile
}
