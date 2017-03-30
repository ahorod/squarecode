
var convertSquareCode = function(sentence) {
  //removes panctuation from sentence
sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
sentence = sentence.replace(/ /g,'');
// sentence = sentence.replace(' ','');
console.log(sentence);
sentence = sentence.toLowerCase();
var length = sentence.length;
var chunk = Math.sqrt(length);
if (chunk%1 > 0){
  var columns = Math.ceil(chunk);
  var rows = Math.floor(chunk);
}
else {
  columns = chunk;
  rows = chunk;
}
// var sentenceArr = sentence.split('');
console.log(sentence);
// var newArray = [];
// var i,j,temparray;
// for (i=0,j=sentenceArr.length; i<j; i+=rows) {
//     temparray = sentenceArr.slice(i,i+columns);
//     newArray.push(temparray);
//   console.log(temparray);
// }

sentence.match(/.{1, columns}/g);
console.log(sentence);


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
