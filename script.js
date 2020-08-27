// Please declare functions and variables above where they are used.

var main = function (input) {

  var myOutputValue = '';
  var counter = 0;

  while (counter < input) { //outer loop 

    var innerCounter = 0;

    while (innerCounter < input * 2) { //inner loop 

      myOutputValue = myOutputValue + 'hello '

      innerCounter += 1
    }
    myOutputValue = myOutputValue + '<br>'
    counter = counter + 1;
  }

  return myOutputValue;
};


