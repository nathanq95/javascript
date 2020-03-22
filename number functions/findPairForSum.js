/*Given a list of non-negative integers and a target sum, returns a pair of numbers that sums to the target sum.
  If no match is found, then an empty array is returned.
*/

function findPairForSum(arr, target){
    let result = [];

    for(let current = 0; current < arr.length; current++){  //Current element

        for(let search = 0; search < arr.length; search++){ //Element being compared to the current one
        
            if(arr[current] + arr[search] == target){  //Compares two elements to see if their sum equals the target sum
                result.push(arr[current]);
                result.push(arr[search]);
                return result;
            }

        }
    }
}

