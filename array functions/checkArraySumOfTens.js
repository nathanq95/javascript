/*
  Returns true if all 10's elements add to 30, false if they do not
  Input: [1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]
  Output: false
*/
export const checkArraySumOfTens = function(inputArray){    //4:47s
    let result = true;
    let sum = 0;

    for(let cursor = 0; cursor < inputArray.length; cursor++){
        if(inputArray[cursor] % 10 == 0){
            sum += inputArray[cursor];
        }
    }
    if(sum != 30){
        return false;
    }

    return result;
};
