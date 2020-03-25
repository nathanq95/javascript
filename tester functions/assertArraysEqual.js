/*
    Checks to see if two arrays are equal
*/
function assertArraysEqual(actual, expected, testName) {
    let sameLength = actual.length === expected.length;
    let sameValues = true;
    
    for(let i = 0; i < expected.length; i++){
        if(expected[i] !== actual[i]){
            sameValues = false;
            break;
        }
    }
    
    if(sameLength && sameValues){
        console.log('passed');
    }
    else{
        console.log('FAILED ['+testName+'] Expected "'+expected+'", but got "'+actual+'"');
    }
  }
