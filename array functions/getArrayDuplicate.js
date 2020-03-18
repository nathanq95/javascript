/*
  Returns the last occuring duplicate element
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: 8
*/
export const getArrayDuplicate = function(inputArray) {    
    let duplicate = null;
    let duplicateCursor = 0;
    

    for(let cursor = 0; cursor < inputArray.length; cursor++){
        duplicateCursor = inputArray[cursor];
        for(let searchCursor = cursor+1; searchCursor < inputArray.length; searchCursor++){
            if(duplicateCursor == inputArray[searchCursor]){
                duplicate = duplicateCursor;
            }
        }
    }
    
   
    return duplicate;
};
