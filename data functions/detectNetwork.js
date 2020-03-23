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
    let cardStr = cardNumber.toString();            //converts cardNumber into a string

    for(let i = 0; i < cardData.length; i++){       //iterates through cardData array


            if(cardData[i].lengths.indexOf(cardStr.length) != -1){  //checks if the length of cardStr is contained in 
                                                                    //cardData[i]'s lengths property

                if(cardData[i].prefixes.indexOf(cardStr.substring(0,2)) != -1){ //checks if cardData[i]'s prefixes                                            
                    return cardData[i].network;                                 //contains the first two digits of cardStr
                }
                if(cardData[i].prefixes.indexOf(cardStr.substring(0,1)) != -1){
                    return cardData[i].network;
                }
            }
        
    }
    
    return 'undefined';
}
