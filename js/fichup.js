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

 $(document).ready(function() {
        $(".burger_click").click(function() {
            $('.mobileShow').slideToggle("slow");
        });
    });
    $(document).ready(function() {
        $(".list_mobile").click(function() {
            $(".mobileShow").slideToggle("slow");
            $(".burger_menu_block_off").toggleClass("burger_menu_block_on");
            $(".line1").toggleClass("line4");
            $(".line3").toggleClass("line6");
            $(".line2").toggleClass("line5");
        });
    });
    $(document).ready(function() {
        $('.burger_click').click(function() {
            $(".burger_menu_block_off").toggleClass("burger_menu_block_on");
            $(".line1").toggleClass("line4");
            $(".line3").toggleClass("line6");
            $(".line2").toggleClass("line5");
        });
    });

