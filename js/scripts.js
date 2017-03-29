
var pigLatin = function(input) {
  var inputArr = input.split ("");
  if (inputArr[0] === "a" || inputArr[0] ==="e" ||inputArr[0] === "i" ||inputArr[0] === "o" ||inputArr[0] === "u" ){
   inputArr.push("ay");
   alert(inputArr);
}
else {
  for (i=0; i<=inputArr.length; i++){
    if (inputArr[i] !== "a" ||  inputArr[i] !== "e" || inputArr[i] !== "i" || inputArr[i] !== "o" ||  inputArr[i] !== "u"){
      var consonant = inputArr[i];
      console.log(consonant);
      }
   }
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
