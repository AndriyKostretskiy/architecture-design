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
        $(".about-info-caption, .sheme-work-caption").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated swing");
            }
        });
    });
    
     $(window).scroll(function () {
        $(".about-team-caption, .contacts-caption").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated wobble");
            }
        });
    });
    
    /*$(window).scroll(function () {
        $(".about-service-caption, .about-works-caption").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated zoomIn");
            }
        });
    });*/
    
    /*$(window).scroll(function () {
        $(".about-info-description-left").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 500) {
               $(this).addClass("animated bounceInLeft");
            }
        });
    });*/
    
    $(window).scroll(function () {
        $(".progress-bars").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("progress-bars-load");
            }
        });
    });
    
    /*$(window).scroll(function () {
        $(".service-first, .service-fourth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInLeft");
            }
        });
    });*/
    
    /*$(window).scroll(function () {
        $(".service-third, .service-sixth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInRight");
            }
        });
    });*/
    
    /*$(window).scroll(function () {
        $(".service-second").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInDown");
            }
        });
    });*/
    
    /*$(window).scroll(function () {
        $(".service-fifth").each(function() {
            let imgPos = $(this).offset().top;
            let topWindow = $(window).scrollTop();
            if(imgPos < topWindow + 600) {
               $(this).addClass("animated fadeInUp");
            }
        });
    });*/
    
    /*$(window).scroll(function () {
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
    });*/
    
    /*$(window).scroll(function () {
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
    });*/
    
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
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        infinite: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

});

(function() {
    
    document.querySelector(".scroll-top")
            .addEventListener("click", () => {
                scrollToTop(1000);
            });
            
    window.onscroll = () => scrollTopAppearance(); 
    
    function scrollTopAppearance() {
        (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ?
        document.querySelector(".scroll-top")
            .classList.add("scroll-top-show") :
        document.querySelector(".scroll-top")
            .classList.remove("scroll-top-show");
    }
    
    function scrollToTop(scrollDuration) {
        let scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        },15);
    }
    
    loadJsonAjax();
    
    function loadJsonAjax() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const serviceData = JSON.parse(xhr.responseText);
                document.querySelector('.load-first-service-name').innerText = serviceData.services.firstService.nameService;
                document.querySelector('.load-first-service-descript').innerText = serviceData.services.firstService.describingService;
                document.querySelector('.load-second-service-name').innerText = serviceData.services.secondService.nameService;
                document.querySelector('.load-second-service-descript').innerText = serviceData.services.secondService.describingService;
                document.querySelector('.load-third-service-name').innerText = serviceData.services.thirdService.nameService;
                document.querySelector('.load-third-service-descript').innerText = serviceData.services.thirdService.describingService;
                document.querySelector('.load-about-description-up').innerText = serviceData.aboutInfo.upDescription;
            }
        }
        xhr.open('GET', 'service-data.json', true);
        xhr.send();
    }
    
    loadJsonFetch();
    
    function loadJsonFetch() {
    fetch('service-data.json')
        .then( response => response.json() )
        .then( serviceData => {
            document.querySelector('.load-fourth-service-name').innerText = serviceData.services.fourthService.nameService;
            document.querySelector('.load-fourth-service-descript').innerText = serviceData.services.fourthService.describingService;
            document.querySelector('.load-fifth-service-name').innerText = serviceData.services.fifthService.nameService;
            document.querySelector('.load-fifth-service-descript').innerText = serviceData.services.fifthService.describingService;
            document.querySelector('.load-sixth-service-name').innerText = serviceData.services.sixthService.nameService;
            document.querySelector('.load-sixth-service-descript').innerText = serviceData.services.sixthService.describingService;
            document.querySelector('.load-about-description-down').innerText = serviceData.aboutInfo.downDescription;
        })
    }
    
})();