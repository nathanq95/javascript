"use strict";

/*
  Given a string, returns true if the string is the same word if it is reversed, including spaces and punctuation.
  Input: "abba"
  Output: true
  Input: "abcdefg"
  Output: false
*/

function isPalindrome(str) {
    let strArr = str.split('').reverse();
    let reverse = '';

    
    for(let i = 0; i < strArr.length; i++){
        reverse += strArr[i];
    }
    if(reverse == str){
        return true;
    }

    return false;
}
