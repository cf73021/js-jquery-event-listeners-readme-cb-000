//define functions here
function getIt(){
  alert("Hey!")
}

function frameIt(){
  $('img').on("load", function(){
    $("img").addClass("tasty");
  })
}
$(document).ready(function(){

$('p').on("click", function(){
  getIt()
});

frameIt()

});
