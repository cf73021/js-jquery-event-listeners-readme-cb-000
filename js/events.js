//define functions here
function getIt(){
  alert("Hey!")
}

function frameIt(){
  $("img").addClass("tasty");
}
$(document).ready(function(){

$('p').on("click", function(){
  getIt()
});

$('img').on("load", function(){
  frameIt()
})

});
