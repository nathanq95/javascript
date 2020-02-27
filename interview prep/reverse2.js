// Write a function which returns a string in reverse.

function reverseString(string) {
    let stringList = string.split('');
    let result = stringList.reverse().toString();
    let resultStr = "";

    for(current = 0; current < result.length; current++){
        if(result.substring(current, current+1) != ','){
            resultStr = resultStr.concat('', result.substring(current, current+1));
        }
    }
    return resultStr;
  }
  
  console.log(reverseString("A string with a BCP 47 language tag, or an array of such strings. For the general form and"));
