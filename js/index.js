/*global jQuery*/
jQuery(document).ready(function($) {
    
    if($(window).width() > 600) {
        $(window).scroll(function() {
    	    $("header").toggleClass("sticky", $(this).scrollTop() > 200);
    	    $(".nav-menu").toggleClass("nav-menu-sticky", $(this).scrollTop() > 200);
        });
    } else {
        $(".section-logo-menu").removeClass("sticky");
    	$(".nav-menu").removeClass("nav-menu-sticky");
    }
    
    $(".burger-menu").click(function () {
        $(".nav-menu").toggleClass("nav-menu-on");
        $(".nav-under-lines").toggleClass("nav-under-lines-on");
        $(".section-logo-menu").toggleClass("section-logo-menu-on");
        $(".logo_img-logo_description").toggleClass("logo_img-logo_description-on");
	});
    

    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
    $(window).scroll(function () {
        $(".about-info-caption, .about-team-caption").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated swing");
            }
        });
    });
    
     $(window).scroll(function () {
        $(".sheme-work-caption, .contacts-caption").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated wobble");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".about-service-caption, .about-works-caption").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated zoomIn");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".about-info-description-left").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated bounceInLeft");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".progress-bars").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("progress-bars-load");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".service-first, .service-fourth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInLeft");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".service-third, .service-sixth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInRight");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".service-second").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInDown");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".service-fifth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInUp");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".sheme-work-first").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 300) {
               $(this).show(2000);
            }
        });
    });
    
    $(window).scroll(function () {
        $(".sheme-work-second").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 300) {
               $(this).show(2500);
            }
        });
    });
    
    $(window).scroll(function () {
        $(".sheme-work-third").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 300) {
               $(this).show(3000);
            }
        });
    });
    
    $(window).scroll(function () {
        $(".sheme-work-fourth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 300) {
               $(this).show(3500);
            }
        });
    });
    
    $(window).scroll(function () {
        $(".contacts-description-left").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInLeft");
            }
        });
    });
    
    $(window).scroll(function () {
        $(".contacts-description-right").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated jackInTheBox");
            }
        });
    });
    
    $(".service-first").hover(function () {
        $(this).toggleClass("about-service-description-hover");
    });
    
    $(".service-second").hover(function () {
        $(this).toggleClass("about-service-description-hover");
    });
    
    $(".service-third").hover(function () {
        $(this).toggleClass("about-service-description-hover");
    });
    
    $(".service-fourth").hover(function () {
        $(this).toggleClass("about-service-description-hover");
    });
    
    $(".service-fifth").hover(function () {
        $(this).toggleClass("about-service-description-hover");
    });
    
    $(".service-sixth").hover(function () {
        $(this).toggleClass("about-service-description-hover");
    });
    
    $(".carusel-sl").slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                /*autoplay: true,
                autoplaySpeed: 2000,*/
                dots: true,
                infinite: true,
                respo: "window"
               /* responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        slidesPerRow: 1,
                        rows: 1,
                      }
                    }
                  ]*/
	    
             });
    
    /*$(window).resize(function(){
        if( $(window).width() > 767) {
            $(".carusel-sl").slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                /*autoplay: true,
                autoplaySpeed: 2000,*/
                /*dots: true,
                infinite: true,
                respo: "window",
             }); 
        } else {
            $(".carusel-sl").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                /*autoplay: true,
                autoplaySpeed: 2000,*/
                /*dots: true,
                infinite: true,
                respondTo: "window",
               
	    
             }); 
            
        }
    });*/
    
    
       
});

(function() {
    
    document.querySelector(".scroll-top")
            .addEventListener("click", () => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
            
    window.onscroll = () => scrollTopAppearance(); 
    
    function scrollTopAppearance() {
        (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ?
        document.querySelector(".scroll-top")
            .classList.add("scroll-top-show") :
        document.querySelector(".scroll-top")
            .classList.remove("scroll-top-show");
    }
    
})();



    
    