            $(document).ready(function(){
   
   //Check to see if the window is top if not then display button
   $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
         $('.scrollToTop').fadeIn();
      } else {
         $('.scrollToTop').fadeOut();
      }
   });
   
   //Click event to scroll to top
   $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
   });
   
});
            
             var num = 50; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav_style').addClass('fixed');
    } else {
        $('.nav_style').removeClass('fixed');
    }
});