/*Write a function called "findSmallestNumberAmongMixedElements".
Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(array){
    let result = 0;

    for(let index = 0; index < array.length; index++){
        if(typeof array[1] == "string"){
            console.log("here");
            //result = array[index];
        }
        break;
    }


    return result;
}

console.log(findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']));
