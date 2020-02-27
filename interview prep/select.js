function select(array, object){
    let result = {};
    let objProp = Object.getOwnPropertyNames(object);

    for(let i = 0; i < array.length; i++){
        if(objProp.lastIndexOf(array[i]) != -1){
            result[array[i]] = object[array[i].toString()];
        }
    }

    return result;
}


var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
