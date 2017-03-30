
var convertToRoman = function(number) {
  //Convert numbers from 1 to 10 to roman numerial
  var number = parseInt(number);
  var decimal = [1, 5, 10];
  var roman = ["I", "V", "X"];
  var romanString = " ";
  var romanArr = [];
  if (number < 4) {
    for (i=0; i < number; i++){
      romanString += "I";
    }
  }
  else if (number === 4) {
    romanString += "IV";
  }
  else if (number === 5) {
    romanString += "V";
  }
  else if (number >5 && number < 9) {
    romanString = "V"
    for (i=0; i < number-5; i++){
      romanString += "I";
    }
  }
  else if (number === 9) {
    romanString += "IX";
  }
  else if (number === 10) {
    romanString += "X";
  }

  console.log(romanString);



}

$(document).ready(function(){
  $("form#roman-number").submit(function(event) {
    event.preventDefault();
    var number = $("#input").val();
    var result = convertToRoman(number);
    $("#convert-to-roman").text(result);

  });
});
