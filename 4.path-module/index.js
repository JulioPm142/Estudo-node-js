const path = require('path')

console.log('Directory name: ',path.dirname(__filename))

console.log('File Name', path.basename(__filename))

console.log('File Extension :',path.extname(__filename))

const joinPath=path.join('/user','documents','node','projects');
console.log('joined path',joinPath)