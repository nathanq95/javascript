/*
Returns the second largest element in a given array
Input: [1, 3, 3, 7, 2, 8, 12, 0, 8, -3]
Output: 8
*/
export const getArraySecondLargest = function(inputArray) { //1:56s
  let largest = 0;
  let secondLargest = 0;

  for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i] > largest){
          secondLargest = largest;
          largest = inputArray[i];
      }
  }
  return secondLargest;
}
