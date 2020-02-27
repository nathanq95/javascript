function countCharacter(string, character){
  let count = 0;
  let str = "";
  str = string.toLowerCase();
  
  for(let i = 0; i < str.length; i++){
    if(str.substring(i,i+1)===character){
      count++;
    }
  }
 
  return count;
}

console.log(countCharacter("I am a hacker", "a"));
