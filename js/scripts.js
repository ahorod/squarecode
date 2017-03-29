
var pigLatin = function(input) {
  var inputArr = input.split ("");
  if (inputArr[0] === "a" || inputArr[0] ==="e" ||inputArr[0] === "i" ||inputArr[0] === "o" ||inputArr[0] === "u" ){
   inputArr.push("ay");
   alert(inputArr);
}
};

$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = pigLatin(input);
    $("#result").show();
  });
});
