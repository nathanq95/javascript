// Write a function which returns a string in reverse.

function reverseString(string) {
let result = '';
let splitString = string.split('');

for(let cursor = string.length-1; cursor >= 0; cursor--){
    result += splitString[cursor];
}

return result;
}
  
  console.log(reverseString("abc"));

