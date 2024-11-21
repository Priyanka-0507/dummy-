const path = require('path')
console.log(path.sep)
const filePath=path.join('./contents','subcontents','hello ther.txt')
console.log(filePath)
const base=path.basename
console.log(base)
const absolute=path.resolve(__dirname)
console.log(absolute)