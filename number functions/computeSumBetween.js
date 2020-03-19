/*
Write a function called "computeSumBetween".
Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beinning at num1, and excluding num2.
Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.
var output = computeSumBetween(2, 5);
console.log(output); // --> 9
*/
function computeSumBetween(num1, num2){
    let result = 0;

    for(let numCount = num1; numCount < num2; numCount++){
        result += numCount;
    }

    return result;
}

console.log(computeSumBetween(2, 5));
