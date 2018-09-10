const moment = require('moment-timezone');

const d = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
console.log(d);

const before = { d: new Date() };
console.log(before);
const json = JSON.stringify(before);
console.log(json);
const after = JSON.parse(json);
console.log(after);
console.log(after.d instanceof Date);
after.d = new Date(after.d);
console.log(after);
console.log(after.d instanceof Date);

