//define functions here
function getIt(){
  alert("Hey!")
}

function frameIt(){

}
$(document).ready(function(){

$('p').on("click", function(){
  getIt()
});

$('img').on("load", function(){
  $("img").addClass("tasty");
})

});
