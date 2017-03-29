
var pigLatinWord = function(word) {
  var result = [];
  var inputArr = word.split ("");
  if (inputArr[0] === "a" || inputArr[0] ==="e" ||inputArr[0] === "i" ||inputArr[0] === "o" ||inputArr[0] === "u" ){
    console.log(inputArr[0]);
   inputArr.push("ay");
   inputArr = inputArr.join('');
   result.push(inputArr);
  //  var result = inputArr.join('');
   console.log(result);
  } else if (inputArr[0] === "q" && inputArr[1] === "u") {
    inputArr.splice(0,2);
    inputArr.push("quay");
    inputArr = inputArr.join('');
    result.push(inputArr);
    console.log(result);
  } else {
    var consonant=[];
    var test = inputArr;
    var counter = 0;
    for (var i=0; i < inputArr.length; i++){
      if (inputArr[i] === "a" ||  inputArr[i] === "e" || inputArr[i] === "i" || inputArr[i] === "o" ||  inputArr[i] === "u"){
        console.log(inputArr[i]);
        break;
        }
      else {
        consonant.push(inputArr[i]);
        counter = counter + 1;
     }
   }

     console.log(consonant, counter);
     test.splice(0,counter)
      var temp = test.concat(consonant);
      temp.push("ay");
      temp = temp.join('');
      result.push(temp);
      console.log(result);
  }
  console.log(result);
  return result;
};

var pigLatin = function(input){
  var words = input.split(" ");
  var sentenceResult = [];
  for (i=0; i < words.length; i++){
  var result = pigLatinWord(words[i]);
  sentenceResult.push(result);
  }
  sentenceResult = sentenceResult.join(' ');
  return sentenceResult;
}


$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = pigLatin(input);
    $("#pig-result").text(result);

  });
});
