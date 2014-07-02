$( document ).ready(function() {
 $("#showMe").click(function(){
  $('#showMe').css('visibility', 'hidden')
  $('#hideMe').css('visibility', 'visible')
  $('#aside').css('height', '493px')
  $('#main').css('width', '67%')
  $('.img').css('width', '300px', 'height' , '200px')
  $('#aside').css('overflow', 'scroll')
  
});
 $("#hideMe").click(function(){
  $('#hideMe').css('visibility', 'hidden')
  $('#showMe').css('visibility', 'visible')
   $('#aside').css('height', '40px')
   $('#main').css('width', '100%')
   $('.img').css('width', '460px', 'height' , '200px')
   $('#aside').css('overflow', 'hidden')
});
});