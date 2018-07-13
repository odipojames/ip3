

$(document).ready(function(){
  $("form#formd").submit(function(event) {
    event.preventDefault();
    var n = parseInt($('input#digit').val());
    var outPut= pingPong(n);

  })
})

var pingPong = function(n) {

    var pi = 'Ping';
    var po = 'Pong';
    for(i=1; i <= n; i++)
        if(i % 15===0){
        var li="<li>"+ pi+po+"</li>"
        }else if(i % 5===0){
          var li="<li>"+po+"</li>"
        }else if(i % 3===0){
        var li="<li>"+ pi+"</li>"
        }  else{
            var li="<li>"+i+"</li>"
        }
    
  $("#result").append(li);
}
