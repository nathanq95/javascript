var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    }
  };
function greetCustomer(name){
    let greeting = "";
    if(customerData.hasOwnProperty(name)){
        if(customerData[name].visits === 1){
            greeting = 'fuck';
        }
        else{
            greeting = " shit";
        }
    }

    return greeting;
}

console.log(greetCustomer("Joe"));
