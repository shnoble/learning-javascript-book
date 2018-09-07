const fs = require('fs');

const fname = 'may_or_may_not_exist.txt';
fs.readFile(fname, function(err, data) {
    if(err) return console.error(`err reading file ${fname}: ${err.message}`);
    console.log(`${fname} contents: ${data}`);
});
