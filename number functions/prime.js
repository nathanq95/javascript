// Write a function that returns either
//  true or false depending on if the
//  number passed in is prime.
//
// If you're unsure of what a prime is, type 'prime number wiki' in google


function isPrime(num) {
    let result = false;
    
    if(num%2 == 0){ //if num/2 = a whole number result = false;
        console.log(num);
        result = false;
    }
    else if(num%3 == 0){//num/3.5.7 = whole number result = false;
        console.log(num);
        result = false;       
    }
    else if(num%5 == 0){
        console.log(num);
        result = false;
    }
    else if(num%7 == 0){
        console.log(num);
        result = false;
    }
    else{
        console.log(num);
       result = true;
    }
   return result;
} 
  // Solutions - Do not edit below this line
  console.log(); // for spacing
  
  console.log(isPrime(10), " <= false =>", isPrime(10) === false);
  
  console.log(isPrime(13), " <= true =>", isPrime(13) === true);
  
  console.log(isPrime(15), " <= false =>", isPrime(15) === false);
  
  console.log(isPrime(17), " <= true =>", isPrime(17) === true);
  
  console.log(); // for spacing
