/*
  Returns a given integer in reverse form

  Input: 500
  Output: 5
  Input: 981
  Output: 189
  Input: -15
  Output: -51
  
  Input: -90
  Output: -9
*/

function reverseInteger(num) {
    let reverse = 0;
    let reverseString = "";
    let numString = num.toString().split('').reverse(); //Adds each number individually into a string array and reverses that array

    for(let i = 0; i < numString.length; i++){

        if((numString[numString.length-1] == '0') && (numString[numString.length-2] == '0')){ //Removes the last two integers if they are 0
            numString.splice(numString.length-1, 1);
            numString.splice(numString.length-2, 1);
        }

        reverseString += numString[i];
    }

    reverse = parseInt(reverseString);  //converts the string containing the reversed form of the parameter back into an integer
    if(numString.indexOf('-') != -1){   //Turns the number negative if it was originally negative
        reverse *= -1;
    }

    return reverse;
  }
