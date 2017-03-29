
var pigLatin = function(input) {
  var inputArr = input.split ("");
  if (inputArr[0] === "a" || inputArr[0] ==="e" ||inputArr[0] === "i" ||inputArr[0] === "o" ||inputArr[0] === "u" ){
   inputArr.push("ay");
   alert(inputArr);
}
  else if (inputArr[0] === "q" && inputArr[1] === "u"){
    inputArr.splice(0,2);
    inputArr.push("quay");
    console.log(inputArr);
  }

else {
  var consonant=[];
  for (i=0; i<=inputArr.length;){
    if (inputArr[i] === "a" ||  inputArr[i] === "e" || inputArr[i] === "i" || inputArr[i] === "o" ||  inputArr[i] === "u"){
      break;
      }
    else {
      consonant.push(inputArr[i]);
      inputArr.splice(i,1);
    }
   }
   var result = inputArr.concat(consonant);
    result.push("ay");
    console.log(result);
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
