//define functions here
function getIt(){
  alert("Hey!")
}


$(document).ready(function(){

$('p').on("click", function(){
  getIt()
});

function frameIt(){
  $('img').on("load", function(){
    $("img").addClass("tasty");
  })
}
});
