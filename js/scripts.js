var convertSquareCode = function(sentence) {
    //removes panctuation from sentence
    sentence = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() \'\"]/g, "");

    console.log(sentence);
    sentence = sentence.toLowerCase();
    var length = sentence.length;
    var chunk = Math.sqrt(length);
    var columns, rows;
    if (chunk % 1 > 0) {
        chunk = Math.floor(chunk);
    } else {
        chunk = chunk;
    }
    var sentenceArr = sentence.split('');
    console.log(sentenceArr);
    var newArray = [];

    for (i = 0; i < sentenceArr.length; i += chunk) {
        newArray.push(sentenceArr.slice(i, i + chunk));
    }
    console.log(newArray);
    var encoded = [];
    for (j = 0; j < chunk; j++) {
        for (i = 0; i < newArray.length; i++) {
            if (newArray[i][j] === undefined) {} else {
                encoded.push(newArray[i][j]);
            }
        }
    }
    console.log(encoded);
    var result = [];
    for (i = 0; i < encoded.length; i += 5) {
        result.push(encoded.slice(i, i + 5).join(''));
    }
    console.log(result);
    var final;
    final = result.join(' ')
    console.log(final);
    return final;
}

$(document).ready(function() {
    $("form#square-code").submit(function(event) {
        event.preventDefault();
        var sentence = $("#input").val();
        var result = convertSquareCode(sentence);
        $("#cipher").text(result);

    });
});
