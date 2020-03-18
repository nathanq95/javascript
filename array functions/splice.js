/*
  Implementation of the splice function to add an element into an array at a given index
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3], 5, 3
  Output: [1, 3, 3, 5, 7, 2, 8, 12, 0, 8, -3]
*/
export const splice = function(inputArray, elementToInsert, indexToInsertAt) {     
    let tempArray = [];
    let arrHold = [];
    let assignCursor = 0;

    for(let inputCursor = 0; inputCursor < inputArray.length; inputCursor++){
        if(assignCursor == indexToInsertAt){
            tempArray[assignCursor] = elementToInsert;
            inputCursor -= 1;
        }
        else{
            tempArray[assignCursor] = inputArray[inputCursor];
        }
        assignCursor++;
    }
    arrHold = tempArray;
    inputArray = arrHold;

};
