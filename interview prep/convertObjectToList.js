function convertObjectToList(obj){
    let result = [];
    let propKeys = Object.getOwnPropertyNames(obj);
    let propProp = Object.values(obj);
    for(let i = 0; i < propKeys.length; i++){
        result.push([propKeys[i], propProp[i]]);
    }
    return result;

         
}
let person = {
        name: 'Holly',
        age: 35,
        role: 'producer'
      };
    console.log(convertObjectToList(person)); 
