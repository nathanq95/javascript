function countAllCharacters(string){
    let result = [];
    let stringArray = string.split('');
    let count = 0;
    for(let i = 0; i < stringArray.length; i++){
        if(result.lastIndexOf(stringArray[i]) == -1){ //checks to see if the current index of the stringArray is in the result object
            count = 0;
            for(let cursor = 0; cursor < stringArray.length; cursor++){
                if(stringArray[cursor] == stringArray[i]){
                    count++;
                }
            }

            
            result[stringArray[i]] = count;
        }
    }

    return result;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
