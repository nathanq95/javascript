/*
  Implementation for sorting an array of integers in ascending order
  Input: sort([1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]);
  Output: [-3, 0, 1, 2, 3, 3, 7, 8, 8, 10, 10, 12, 20, 40]
*/
function sort(inputArray) { 
    let hold = 0;
    let sorted = false;     //Set to true if all numbers have been sorted   
    let swapped = false;    //Set to true if any numbers were swapped

    while(!sorted){ //loop will keep running until the entire array has been sorted 

        for(let current = 0; current < inputArray.length; current++){
            
            if(inputArray[current] > inputArray[current + 1]){  //checks if the current element is larger than the next element

                hold = inputArray[current];                     
                inputArray[current] = inputArray[current+1];
                inputArray[current+1] = hold;
                sorted = false;
                swapped = true;     //swapped is set to true if any swaps were made while iterating through the array

            }

        }

        if(!swapped){   //if no swaps were made during the iteration of the array, then the array must be sorted
            sorted = true;
        }
        
        swapped = false;    
    }
    
    return inputArray;
}


