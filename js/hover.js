$(document).ready(function(){
  $(".firstArticle").mouseover(function(){
    $("#content").css("background-color","red");
  });
  $(".firstArticle").mouseout(function(){
    $("#content").css("background-color","white");
  });
});