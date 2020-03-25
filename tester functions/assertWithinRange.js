/*
    Checks if a number falls within a given range
*/
function assertWithinRange(low, high, actual, testName) {
    if(actual >= low && actual <= high){
        console.log('passed');
    }
    else{
        console.log('FAIL ['+testName+'] "'+actual+'" not within range '+low+' to '+high);
    }
}
