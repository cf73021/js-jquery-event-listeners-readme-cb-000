//define functions here
function getIt(){
  alert("Hey!")
}

function frameIt(){
  $('img').addclass('tasty')
}
$(document).ready(function(){

$('p').on("click", function(){
  getIt()
});

$('img').on("load", function(){
  frameIt()
})

});
