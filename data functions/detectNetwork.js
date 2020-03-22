/*
Given a card number, returns the appropriate network string (or undefined if there's no match), based on the provided cardData
*/

var cardData = [{
    network: 'Visa',       // card issuer (network)
    prefixes: ['4'],         // beginning digits
    lengths: [13, 16, 19]  // lengths of card numbers
  },{
    network: 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },{
    network: 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },{
    network: 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }];

  function detectNetwork(cardNumber, cardData) {
    let cardString = cardNumber.toString();         //converts cardNumber into a string

    for(let i = 0; i < cardData.length; i++){       //iterates through the cardData array

        for(let j = 0; j < cardData[i].prefixes.length; j++){   //iterates through the cardData prefix property

            if(cardData[i].prefixes[j] == cardString.substring(0,2)){   //compares the first two digits of cardNumber to the 
                                                                        //current element in the prefix property

                for(let k = 0; k < cardData[i].lengths.length; k++){    //iterates through the length property

                    if(cardData[i].lengths[k] == cardString.length){    //checks if cardNumber's length is valid
                        return cardData[i].network;
                    }
                }   

            }
            else if(cardData[i].prefixes[j] == cardString.substring(0,1)){

                for(let k = 0; k < cardData[i].lengths.length; k++){
                    if(cardData[i].lengths[k] == cardString.length){
                        return cardData[i].network;
                    }
                } 

            }
        }
    }

    return 'undefined';     
}

