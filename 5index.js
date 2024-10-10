const path = require('path');

const filePath = '/user/local/bin/myfile.txt';

console.log('File Path:', filePath);
console.log('Directory Name:', path.dirname(filePath));
console.log('Base Name:', path.basename(filePath));
console.log('File Extension:', path.extname(filePath));

const newFilePath = path.join('/user', 'local', 'bin', 'newfile.txt');
console.log('New File Path:', newFilePath);

const absolutePath = path.resolve('myfolder', 'myfile.txt');
console.log('Absolute Path:', absolutePath);
