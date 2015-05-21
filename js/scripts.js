$(document).ready(function(){
$('.title').delay(300).slideDown(300);
});

$(document).scroll(function(){

        var windowHeight = $(this).height();
        var windowScroll = $(this).scrollTop();
        var windowScrollHeight = windowHeight + windowScroll;

    $.fn.revealOnScroll = function(direction){
        this.each(function(){
            var objectOffset = $(this).offset();
            var objectOffsetTop = objectOffset.top;


        if(!$(this).hasClass("animation-complete")) {

            if(direction == "left") {
                $(this).css({
                    "opacity": 0
                });
            } else {
                      $(this).css({
                    "opacity": 0
                });
                      $(this).addClass('hidden');
            }


         if(windowScrollHeight > objectOffsetTop) {
            $(this).animate({'opacity': 1},1000).addClass('animation-complete');
         }

        }
        });
    } //function end!


         $(window).scroll(function(){
        windowHeight = $(window).height();
         windowScroll = $(window).scrollTop();
         windowScrollHeight = windowHeight + windowScroll;

        $(".colarge img").revealOnScroll();
          $(".info").revealOnScroll();
         });



              if(windowScroll > 74) {
            $(".colarge img").addClass('is-showing');
         } else {
            $(".colarge img").removeClass("is-showing");
         }


         if(windowScroll > 800) {
            $(".info").addClass('is-showing');
         } else {
            $(".info").removeClass("is-showing");
         }

         console.log(wScroll);

        });
