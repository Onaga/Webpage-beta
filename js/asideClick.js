$( document ).ready(function() {
 $("#showMe").click(function(){
  $('#showMe').css('visibility', 'hidden')
  $('#hideMe').css('visibility', 'visible')
  $('#aside').css('height', '450px')

});
 $("#hideMe").click(function(){
  $('#hideMe').css('visibility', 'hidden')
  $('#showMe').css('visibility', 'visible')
   $('#aside').css('height', '40px')

});
});