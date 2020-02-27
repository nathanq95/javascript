// Write a function that counts the number
//  of vowels in a string

function countVowels(str) {
    let result = str;
    let count = 0;
     for(let x = 0; x < result.length; x++){
         if("aeiouAEIOU".lastIndexOf(result.substring(x, x+1)) != -1){
            count++;
         }
     }
    
    return count;
  }
  
  // Solutions - Do not edit below this line
  console.log(); // for spacing
  
  var string1 = "abcxyz";
  console.log(countVowels(string1), " <= 1 =>", countVowels(string1) === 1);
  
  var string2 = "ada Lovelace";
  console.log(countVowels(string2), " <= 6 =>", countVowels(string2) === 6);
  
  var string3 = "grace brewster murray hopper";
  console.log(countVowels(string3), " <= 8 =>", countVowels(string3) === 8);
  console.log(); // for spacing
