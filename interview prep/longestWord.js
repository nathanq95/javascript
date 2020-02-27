// Write a function that takes a sentence and returns the longest word.

function longestWord(string) {
    //break words into an array
    //loop through the array
    //check length of elements
    //if another element is the same length, return the first one
    //return element with longest length
    let sentence = string.split(' ');
    let result = "";

    for(let cursor = 0; cursor < sentence.length; cursor++){
        if(sentence[cursor].length > result.length){
            result = sentence[cursor];
        }
    }
    
    return result;
  }
  
  // Solutions - Do not edit below this line
  console.log(); // for spacing
  
  console.log(longestWord("hello"), " <= hello =>", longestWord("hello") === "hello");
  
  console.log(longestWord("love is a beautiful thing"), " <= beautiful =>", longestWord("love is a beautiful thing") === "beautiful");
  
  console.log(longestWord("all your base are belong to us"), " <= belong =>", longestWord("all your base are belong to us") === "belong");
  
  console.log(longestWord("i love lamp"), " <= true => ", longestWord("i love lamp") === "love");
  
  console.log(); // for spacing
