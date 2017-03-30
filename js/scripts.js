
var convertSingleDigit = function(number) {
  //Convert numbers from 1 to 10 to roman numerial
  var number = parseInt(number);
  var romanString = " ";

  if (number < 4) {
    for (i=0; i < number; i++){
      romanString += "I";
    }
  } else if (number === 4) {
    romanString += "IV";
  } else if (number === 5) {
    romanString += "V";
  } else if (number >5 && number < 9) {
    romanString = "V"
    for (i=0; i < number-5; i++){
      romanString += "I";
    }
  } else if (number === 9) {
    romanString += "IX";

  } else if (number === 10) {
    romanString += "X";

  }
  console.log(romanString);
  return romanString;
}

var convertToTens = function(number) {
  //Convert numbers from 10 to 100 to roman numerial
  var number = parseInt(number);
  var romanStringTen = " ";
  var tensInteger = Math.floor(number/10);
  console.log(tensInteger);

  if (tensInteger < 4) {
    for (i=0; i < tensInteger; i++){
      romanStringTen += "X";
    }
  } else if (tensInteger === 4) {
    romanStringTen += "XL";
  } else if (tensInteger === 5) {
    romanStringTen += "L";
  } else if (tensInteger >5 && tensInteger < 9) {
    romanStringTen = "L"
    for (i=0; i < tensInteger-5; i++){
      romanStringTen += "I";
    }
  } else if (tensInteger === 9) {
    romanStringTen += "XC";
  } else if (tensInteger === 10) {
    romanStringTen += "C";
  }
  console.log(romanStringTen);
  if (number%10 > 0) {
  var secondDigit = number%10;
  var resultDigit = convertSingleDigit(secondDigit);
  } else {
    var resultDigit = "";
  }

  var resultTens = romanStringTen + resultDigit;
  return resultTens;
  console.log(resultTens);
}

var convertToHundreds = function(number) {
  //Convert numbers from 10 to 100 to roman numerial
  var number = parseInt(number);
  var romanStringHundreds = " ";
  var hundredsInteger = Math.floor(number/100);
  console.log(hundredsInteger);

  if (hundredsInteger < 4) {
    for (i=0; i < hundredsInteger; i++){
      romanStringHundreds += "C";
    }
  } else if (hundredsInteger === 4) {
    romanStringHundreds += "CD";
  } else if (hundredsInteger === 5) {
    romanStringHundreds += "D";
  } else if (hundredsInteger >5 && hundredsInteger < 9) {
    romanStringHundreds = "D"
    for (i=0; i < hundredsInteger-5; i++){
      romanStringHundreds += "C";
    }
  } else if (hundredsInteger === 9) {
    romanStringHundreds += "CM";
  } else if (hundredsInteger === 10) {
    romanStringHundreds += "M";
  }
  console.log(romanStringHundreds);

  if (number%100 > 0) {
  var secondDigit = number%100;
  var resultDigit = convertToTens(secondDigit);
  } else {
    var resultDigit = "";
  }

  var resultHundred = romanStringHundreds + resultDigit;
  return resultHundred;
  console.log(resultHundred);
}

var convertToThousands = function(number) {
  //Convert numbers from 100 to 3999 to roman numerial
  var number = parseInt(number);
  var romanStringThousands = " ";
  var thousandsInteger = Math.floor(number/1000);
  console.log(thousandsInteger);

  if (thousandsInteger < 4) {
    for (i=0; i < thousandsInteger; i++){
      romanStringThousands += "M";
    }
  }

  console.log(romanStringThousands);

  if (number%1000 > 0) {
  var secondDigit = number%1000;
  var resultDigit = convertToHundreds(secondDigit);
  } else {
    var resultDigit = "";
  }

  var resultThousand= romanStringThousands + resultDigit;
  for(var j = 0; j < resultThousand.length; j++) {
    if(resultThousand[j] === " ") {
      resultThousand = resultThousand[j].replace(" ","");
    }
  }
  console.log(resultThousand);
  return resultThousand;

}


$(document).ready(function(){
  $("form#roman-number").submit(function(event) {
    event.preventDefault();
    var number = $("#input").val();
    var result = convertToThousands(number);
    $("#convert-to-roman").text(result);

  });
});
