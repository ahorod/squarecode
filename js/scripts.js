
var convertSquareCode = function(sentence) {
  //removes panctuation from sentence
sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

sentence = sentence.replace(/ /g,'');
console.log(sentence);
sentence = sentence.toLowerCase();
var length = sentence.length;
var chunk = Math.sqrt(length);
var columns, rows;
if (chunk%1 > 0){
  chunk = Math.floor(chunk);
}
else {
  chunk = chunk;
}
var sentenceArr = sentence.split('');
console.log(sentenceArr);
var newArray = [];

for (i=0; i < sentenceArr.length;i+=chunk) {
    newArray = sentenceArr.slice(i,i+chunk);
    console.log(newArray);
}

// for (var i=0; i < newArray.length; i++){
//   for (var j=0; j < newArray[i].length; j++){
//     string += newArray[i][j];
//   }
// }

// for (var i=0; i < newArray[i].length; i++){
//   for (var j=0; j < newArray.length; j++){
//     string += newArray[i][j];
//   }
// }
// console.log(newArray[0][0]);
// console.log(string);
}

$(document).ready(function(){
  $("form#square-code").submit(function(event) {
    event.preventDefault();
    var sentence = $("#input").val();
    var result = convertSquareCode(sentence);
    $("#cipher").text(result);

  });
});
