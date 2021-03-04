const getInput = require('./get-input.js');
const correctPin = "1234";
let counter = 1;
// Your code here!
while(getInput(counter) !== undefined){
    if (getInput(counter) === correctPin){
        console.log("That is correct. You took " + counter + " guess(es).")
        break;
    }else(counter++)
}
if (getInput(counter) !== correctPin){
    console.log("None of the entered pin codes are correct.")
}