(document).ready(function() {
  $("form1#formd").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#digit").val();
    console.log(userInput);
    $("ul.result").text(userInput);
  
function pingPong(){
  for (var i=1; x <= userInput; i++) {
    var skip = 0;
    if (i % 3 == 0) {
        document.write('ping');
        skip = 1;
    }
    if (i % 5 == 0) {
        document.write('pong');
        skip = 1;
    }
    if (!skip) {
        document.write(i);
    }
    document.write('<br>');
};
};
});
});
