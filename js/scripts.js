var pigLatin = function(input) {
  if (input.match(/[a-z]/i)){
    alert("letter");
  }
  else {
    alert("not letters")
  }
};
$(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var result = pigLatin(input);
    $("#result").show();
  });
});
