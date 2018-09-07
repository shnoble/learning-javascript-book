const arr = [4, 6, 16, 36];
console.log(arr.every(x => x%2 === 0));
console.log(arr.every(x => Number.isInteger(Math.sqrt(x))));
