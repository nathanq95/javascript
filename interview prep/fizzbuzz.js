// Write a function writes all the values between a low number and a high number
// with the following exceptions:
//
// When the number is evenly divisible by three, push 'fizz'
// When the number is evenly divisible by five, push 'buzz'
// When the number is evenly divisible by three and five, push 'fizzbuzz'

function fizzBuzz(low, high) {
    let result = [];
    let difference = high-low;

    for(let x = 0; x <= difference; x++){
        if(((low+x)%5 == 0) && ((low+x)%3 == 0)){
            result.push("fizzbuzz");
        }
        else if((low+x)%5 == 0){
            result.push("buzz");
        }
        else if((low+x)%3 == 0){
            result.push("fizz");
        }
        else{
            result.push(low+x);
        }
    }
  
        return result;
    }
    
    
    // Solutions - Do not edit below this line
    console.log(); // for spacing
    console.log(fizzBuzz(13, 17));
    console.log("[ 13, 14, \'fizzbuzz\', 16, 17 ] <= does the above match this?");
    console.log(); // for spacing
    
    console.log(fizzBuzz(101, 104));
    console.log("[ 101, \'fizz\', 103, 104 ] <= does the above match this?");
    console.log(); // for spacing
    
    console.log(fizzBuzz(34360, 34366));
    console.log("[ 'buzz', 34361, 'fizz', 34363, 34364, 'fizzbuzz', 34366 ] <= does the above match this?");
    console.log(); // for spacing
