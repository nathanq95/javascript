/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
Function's return value (output):
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}
Do not change the input string. Assume that all elements in the array will be of type 'string'.
*/
function fromListToObject(array) {
    let obj = {};

    for(let i = 0; i < array.length; i++){
       obj[array[i][0]] = array[i][1];
       //console.log("hi");
    }
    return obj;
}
 
let car = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
 console.log(fromListToObject(car));
    
