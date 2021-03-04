const getInput = require('./get-input.js');

let i = 1;
let total = 0;

while(getInput(i) !== undefined){
    let current = Number(getInput(i));
    total += current;
    i++;
}
console.log(total);
// Your code here!
