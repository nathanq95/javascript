/*
    This function reads object data and returns a specific statement based on a given property's value,
    returns a serparate statement if the string is not a property of the object
*/

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
  
  function greetCustomer(firstName) {
    let obj = customerData;

    if(obj.hasOwnProperty(firstName)){      //checks to see if the string is a property of a given object

        if(obj[firstName].visits == 1){     //returns a specific statement based on the property's value
            return 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
        }
        if(obj[firstName].visits > 1){
            return 'Welcome back, '+firstName+'!'+' So glad to see you again!';
        }
    }
    else{   //this statement will return if the string is not a property of the object
        return 'Welcome! Is this your first time?';
    }

  }
