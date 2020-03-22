/*
  Implementation for sorting an array of integers in ascending order
  Input: sort([1, 3, 10, 3, 7, 20, 10, 2, 8, 12, 40, 0, 8, -3]);
  Output: [-3, 0, 1, 2, 3, 3, 7, 8, 8, 10, 10, 12, 20, 40]
*/
function sort(inputArray) { 
    let hold = 0; 
    let swapped = true;    //Set to true if any numbers were swapped

    while(swapped){ //loop will continue to run until not a swap is not made
        swapped = false; 

        for(let current = 0; current < inputArray.length; current++){
            
            if(inputArray[current] > inputArray[current + 1]){  //checks if the current element is larger than the next element

                hold = inputArray[current];                     //here the current element is stored in hold         
                inputArray[current] = inputArray[current+1];    //the current element is then switched with the next element
                inputArray[current+1] = hold;
                swapped = true;     

            }

        }        
           
    }
    
    return inputArray;
}


