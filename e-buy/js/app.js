
$(window).on('load', function () {
    $('#preloader').fadeOut();
});

   $(function(){
    // mode changer js start
    $('#mode_changer').on('click', function(){
        if($('html').hasClass('dark')){
            $('html').removeClass('dark')
            $(this).html('<i class="fa-solid fa-moon"></i>')
        }else{
            $('html').addClass('dark')
            $(this).html('<i class="fa-solid fa-sun"></i>')
            
        }
    });
    // mode changer js end
    $('#m-glass').on('click', function(){
        $('.search-box').addClass('show');
    })

         $(window).on('scroll',function(){
        let scrollsize = $(window).scrollTop();
        if(scrollsize > 700){
         $('#backtoTop').slideDown()
        } else{
         $('#backtoTop').slideUp()
        }
        })

        $('#backtoTop').on('click', function(){
            $('html, body').animate({
                scrollTop:0,
            },1000)

        // menu fixed
        if(scrollsize > 100){
            $('#navigation').addClass('active')
        } else{
            $('#navigation').removeClass('active')
        }
    })

    $('.banner_slider').slick({
        prevArrow: '<i class="banner_slider_arrow fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="banner_slider_arrow fa-solid fa-angle-right"></i>',
        // dots: true,
        // dotsClass: 'banner_slider_dots',

    });

    $('.image_slider').slick({
        slidesToShow:3,
        prevArrow: '<i class="image_slider_arrow fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="image_slider_arrow fa-solid fa-angle-right"></i>',
    })

    $('.lp_image_slider').slick({
        slidesToShow:4,
        prevArrow: '<i class="lp_image_slider_arrow fa-solid fa-angle-left"></i>',
        nextArrow: '<i class="lp_image_slider_arrow fa-solid fa-angle-right"></i>',
    })

  
    

   })
