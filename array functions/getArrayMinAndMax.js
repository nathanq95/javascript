/*
  Returns elements with the smallest and largest value in a given array
  Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
  Output: { minimum: -3, maximum: 12 }
*/
export const getArrayMinAndMax = function(inputArray)  {    
    let output = {};
    let min = 0;
    let max = 0;

    for(let cursor = 0; cursor < inputArray.length; cursor++){
        if(inputArray[cursor] < min){
            min = inputArray[cursor];
        }
        if(inputArray[cursor] > max){
            max = inputArray[cursor];
        }
    }
    output.minimum = min;
    output.maximum = max;

    return output;
};
