(document).ready(function() {
  $("form1#formd").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#digit").val();
    console.log(userInput);
    $("ul.result").text(userInput);
  });

});
