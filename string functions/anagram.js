/*
  This function compares two strings, while ignoring empty spaces and punctuation marks, to determine if they are anagrams
  returns true if they are anagrams, else returns false
*/

function anagram(str1, str2){

  let result = false;

  if(str1.length == 0 || str2.length == 0){
    return false;
  }
  else{
    let obj1 = {};
    let obj2 = {};
    let str1Low = str1.toLowerCase();
    let str2Low = str2.toLowerCase();

    for(let i  = 0; i < str1Low.length; i++){  //iterate through the first given string
      if(!obj1.hasOwnProperty(str1Low[i])){       //checks if the current character is a property of obj1
        if(' ,.?;:!'.indexOf(str1Low[i]) == -1){  //checks if the current character is not an empty space or punctuation mark
          obj1[str1Low[i]] = 1;                       //creates a property where the character is its propery name and initializes its value to 1
        }
      }
      else{
        obj1[str1Low[i]] += 1;                      //increments the current character's count by 1
      }
    }

    for(let i  = 0; i < str2Low.length; i++){
      if(!obj2.hasOwnProperty(str2Low[i])){
        if(' ,.?;:!'.indexOf(str2Low[i]) == -1){
          obj2[str2Low[i]] = 1;
        }
      }
      else{
        obj2[str2Low[i]] += 1;
      }
    }

    for(let key in obj1){             //iterates through obj1
      if(obj2.hasOwnProperty(key)){   //checks if the current key in obj1 is also a key in obj2
        if(obj1[key] == obj2[key]){   //compares the value of a key that is found in obj1 & obj2
          result = true;
        }
        else{
          result = false;
          return result;
        }
      }
      else{                       //returns false if obj2 does not contain a key that is in obj1
        result = false;
        return result;
      }
    }
  }

  return result;
}