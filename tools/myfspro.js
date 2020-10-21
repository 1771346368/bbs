const fs = require('fs')
var write = function (path, data) {
  fs.writeFile(path, JSON.stringify(data), () => {
    console.log(`写入${path}成功`);
  })
}
/**
 * 异步读文件，返回promise
 * @param {String} path 文件路径
 */
var read = function (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        fs.writeFile(path, '', () => { })
        reject(err)
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })
}
exports.write = write;
exports.read = read;