const fs = require('fs')
var write = function (path, data) {
  fs.writeFile(path, JSON.stringify(data, null, 2), () => {
    console.log(`写入${path}成功`);
  })
}
var read = function (path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      fs.writeFile(path, '', () => { })
      throw err;
    } else {
      return callback(JSON.parse(data.toString()))
    }
  })
}
exports.write = write;
exports.read = read;