// Write a function which returns a string in reverse.

function reverseString(string) {
    let result = '';

    for(let i = string.length - 1; i >=0; i--){
        result += string[i];
    }

    return result;
  }
  
  console.log(reverseString("abc"));
