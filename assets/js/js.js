$(document).ready(function($){

  $("a#expand").on('click', function(e){
    $(this).children().toggleClass('expand');
  });
    
});