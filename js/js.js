$(document).ready(function(){

$( "#menu-mob" ).click(function() {
  $(this).toggleClass('active');
      $('#mob-show').toggle();
  
  
    });
$(window).resize(function() {
     if ($(window).width() > 500 ) {
         $('#mob-show').removeAttr('style');
       }
    });
});
$(document).ready(function(){
  $('.popup-btn').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeIn();
      
   });
  $('.popup-close').on('click', function(event) {
        event.preventDefault();
        $('.popup').fadeOut();
      
   });
});
