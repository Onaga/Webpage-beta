$( document ).ready(function() {
 $("#showMe").click(function(){
  $('#showMe').css('visibility', 'hidden')
  $('#hideMe').css('visibility', 'visible')
  $('#aside').css('height', '493px')
  $('#main').css('width', '67%')
  $('.img').css('width', '300px', 'height' , '200px')
  $('#aside').css('overflow', 'scroll')
  $('.img').css('margin-left', '20%')
  $('.contP').css('margin-left', '22%')
});
 $("#hideMe").click(function(){
  $('#hideMe').css('visibility', 'hidden')
  $('#showMe').css('visibility', 'visible')
   $('#aside').css('height', '40px')
   $('#main').css('width', '100%')
   $('.img').css('width', '260px', 'height' , '200px')
   $('#aside').css('overflow', 'hidden')
   $('.img').css('margin-left', '38%')
   $('.contP').css('margin-left', '38.2%')

});
});