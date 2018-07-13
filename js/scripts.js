

$(document).ready(function(){
  $("form#formd").submit(function(event) {
    event.preventDefault();
    var n = parseInt($('input#digit').val());
    var outPut= pingPong(n);
    console.log(n);
      $("#result").text(outPut);
  });
});

var pingPong = function(n) {

    var pi = 'Ping';
    var po = 'Pong';
    for(i=1; i <= n; i++)
        if(i % 15===0){
          console.log(pi + po);
        }else if(i % 5){
          console.log(po);
        }else if(i % 3){
          console.log(pi);
        }  else{
              console.log(i);
        }
    return;
}
