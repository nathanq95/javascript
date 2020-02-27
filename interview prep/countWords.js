function countWords(string){
    let result = {};
    let countNum = [];
    let hold = [];
    let count = 0;
    let str = string.split(' ');

    for(let i = 0; i < str.length; i++){
        if(hold.indexOf(str[i]) === -1){
            hold[i] = str[i];
            for(j = i; j < str.length; j++){
                if(str[j] == hold[i]){
                    count++;
                }
            }
            
        }
        countNum[i] = count;
        count = 0;
    }
    for(let x = 0; x < hold.length; x++){
        result[hold[x]] = countNum[x];
    }

    return result;
}

var output = countWords('ask a bunch get a bunch'); 
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
