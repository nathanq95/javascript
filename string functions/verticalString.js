/*
    This function takes in a string (a word or sentence), and returns each individual word vertically.

    input = 'Hello, World!';
    output = H  W
             e  o
             l  r
             l  l
             o  d
             ,  !
*/
function verticalString(str){
    let result = '';
    let strArray = str.split(' ');
    let maxLength = 0;

    for(let i = 0; i < strArray.length; i++){  //finds the word with the longest length
       
        if(strArray[i].length > maxLength){
            maxLength = strArray[i].length;
        }

    }
    
    for(let letter = 0; letter < maxLength; letter++){     //iterates through each letter

        for(let word = 0; word < strArray.length; word++){   //iterates through each word

            if(strArray[word][letter] !== undefined){   
                result += strArray[word][letter];
                result += '  ';
            }
            else{  //adds an empty space if the current letter is undefined (if a shorter word is reached)
                result += '   ';
            }

        }
        result += '\n';
    }

    return result;
}
