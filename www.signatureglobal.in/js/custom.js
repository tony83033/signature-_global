$(document).ready(function(){

(function t() {
        var a = window.location.hash;
        if (a) {
            var e = $(a);
            e.length && $("html, body").animate({
                scrollTop: e.offset().top - 80
            }, 100)
        }
    })(), $(".scdown").click(function() {
        let t = location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname;

        if (t) {
            var a = $(this.hash);
console.log(a);
            if ((a = a.length && a || $("[name=" + this.hash.slice(1) + "]")).length) {
                var e = a.offset().top - 80;
                return $("html,body").animate({
                    scrollTop: e
                }, 0), !1
            }
        }
    })





//addEventListener("fetch", (event) => {
 // event.respondWith(
   // (async () => {
      // Respond from the cache if we can
    //  const cachedResponse = await caches.match(event.request);
     // if (cachedResponse) return cachedResponse;

      // Else, use the preloaded response, if it's there
    //  const response = await event.preloadResponse;
    //  if (response) return response;

      // Else try the network.
   //   return fetch(event.request);
 //   })()
 // );
//}); 

//if ('serviceWorker' in navigator) {
 // navigator.serviceWorker.getRegistrations().then(function (registrations) {
    //returns installed service workers
   // if (registrations.length) {
   //   for(let registration of registrations) {
   //     registration.unregister();
   //   }
 //   }
 // });
//}



wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
});
wow.init();
$("[data-fancybox]").fancybox();
$(document).on('click', '.navbar-toggler', function() {
$('.overlaymobbg').toggleClass('active')
}); 


$('#myModal').modal('show');
   


$('.signum-slider').slick({
     dots:false,
     slidesToShow:1,
     slidesToScroll: 1,
     autoplay:true,
     autoplaySpeed: 3000,
     easing: 'easeOutElastic',
     speed:900,
     infinite: true,
   nextArrow:false,
   	  prevArrow:false,
     
     
    
   });
 

 $('.director-slider').slick({
     dots:false,
     slidesToShow:3,
     slidesToScroll: 1,
     autoplay:true,
     autoplaySpeed: 3000,
     easing: 'easeOutElastic',
     speed:900,
     infinite: true,
   nextArrow:false,
   	  prevArrow:false,
     responsive: [
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       
     ],
     
    
   });
   
   $('.arrow-icon-left').click(function(){
         $('.director-slider').slick('slickPrev');
       });
       
       $('.arrow-icon-right').click(function(){
         $('.director-slider').slick('slickNext');
       }); 
       

$('.key-slider ').slick({
         dots:false,
         slidesToShow:3,
         slidesToScroll: 1,
         autoplay:true,
         autoplaySpeed:2000,
         easing: 'easeOutElastic',
         speed:800,
         infinite: true,
         nextArrow:false,
   	  prevArrow:false,
   	  responsive: [
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       
     ],
        });
   
   $('.arrow-icon-left2').click(function(){
         $('.key-slider').slick('slickPrev');
       });
       
       $('.arrow-icon-right2').click(function(){
         $('.key-slider').slick('slickNext');
       }); 
 
  $('.architect-slider').slick({
     dots:false,
     slidesToShow:3,
     slidesToScroll: 1,
     autoplay:true,
     autoplaySpeed:2500,
     easing: 'easeOutElastic',
     speed:700,
     infinite: true,
   nextArrow:false,
   	  prevArrow:false,
     responsive: [
       {
         breakpoint: 992,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
       
     ],
     
    
   });
   
   $('.arrow-icon-left3').click(function(){
         $('.architect-slider').slick('slickPrev');
       });
       
       $('.arrow-icon-right3').click(function(){
         $('.architect-slider').slick('slickNext');
       });

$('.signumplaza93-slider').slick({
 infinite: true,
  dots:false,
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay:true,
  easing: 'easeOutElastic',
  speed:2000,
  nextArrow:false,
  prevArrow:false

});
             
$('.sgcity79b-slider').slick({
 infinite: true,
  dots:false,
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay:true,
  easing: 'easeOutElastic',
  speed:2000,
  nextArrow:false,
  prevArrow:false

});

$('.sgcity93-slider2').slick({
 infinite: true,
  dots:false,
  slidesToShow:1,
  slidesToScroll: 1,
  autoplay:true,
  easing: 'easeOutElastic',
  speed:2000,
  nextArrow:false,
  prevArrow:false

});
       
$('.career-slider').slick({
  dots:false,
  slidesToShow:1,
  slidesToScroll: 1,
   autoplay:true,
  autoplaySpeed:2000,
  easing: 'easeOutElastic',
  speed:2000,
  infinite: true,
  nextArrow:false,
  prevArrow:false,

});


 $('.constructionslider').slick({
  dots:false,
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  easing: 'easeOutElastic',
  speed:800,
  infinite: true,
nextArrow:false,
	  prevArrow:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
  
 
});
$('.arrow-icon-leftloa').click(function(){
  $('.constructionslider').slick('slickPrev');
});

$('.arrow-icon-rightloa').click(function(){
  $('.constructionslider').slick('slickNext');
}); 

 $('.csrslider').slick({
  dots:false,
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  easing: 'easeOutElastic',
  speed:800,
  infinite: true,
nextArrow:false,
	  prevArrow:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
});
$('.arrow-icon-leftcsr').click(function(){
  $('.csrslider').slick('slickPrev');
});

$('.arrow-icon-rightcsr').click(function(){
  $('.csrslider').slick('slickNext');
}); 

 $('.vdsliderg2').slick({
  dots:false,
  slidesToShow:2,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  easing: 'easeOutElastic',
  speed:800,
  infinite: true,
nextArrow:false,
	  prevArrow:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
});
$('.leftvdg2').click(function(){
  $('.vdsliderg2').slick('slickPrev');
});

$('.rightvdg2').click(function(){
  $('.vdsliderg2').slick('slickNext');
});

 $('.vdsliderg3').slick({
  dots:false,
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:5000,
  easing: 'easeOutElastic',
  speed:800,
  infinite: true,
nextArrow:false,
	  prevArrow:false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
});
$('.leftvdg3').click(function(){
  $('.vdsliderg3').slick('slickPrev');
});

$('.rightvdg3').click(function(){
  $('.vdsliderg3').slick('slickNext');
});

$('.unitplanslider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:false,
  arrows: false,
  autoplay: true,
  autoplaySpeed:5000,
  infinite: true,
  speed:900,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
 });
 $('.arrow-icon-leftpl').click(function(){
  $('.unitplanslider').slick('slickPrev');
});

$('.arrow-icon-rightpl').click(function(){
  $('.unitplanslider').slick('slickNext');
}); 

//  $('.arrow-icon-left').click(function(){
//   $('.unitplanslider').slick('slickPrev');
// });

// $('.arrow-icon-right').click(function(){
//   $('.unitplanslider').slick('slickNext');
// }); 
$('.unitplansliderg2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots:false,
  arrows: false,
  autoplay: true,
  autoplaySpeed:5000,
  infinite: true,
  speed:900,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ],
 });
 $('.arrow-icon-leftpl').click(function(){
  $('.unitplansliderg2').slick('slickPrev');
});

$('.arrow-icon-rightpl').click(function(){
  $('.unitplansliderg2').slick('slickNext');
});
   
 $('.amenitiesslider').slick({
  dots:false,
  slidesToShow:3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 5000,
  infinite: true,
  arrows:false,
  speed:800,
  responsive: [
      {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
]
 
});
$('.arrow-icon-left').click(function(){
  $('.amenitiesslider').slick('slickPrev');
});

$('.arrow-icon-right').click(function(){
  $('.amenitiesslider').slick('slickNext');
}); 

var helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};
function sliderInit() {
  var $slider = $('.slider-holder');
  $slider.each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay:true,
      autoplaySpeed: 3000,
      infinite: true,
       prevArrow: false,
    nextArrow: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    });

    if ($(this).find('.item').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }
    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });
    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
  });
};
sliderInit();
$('.arrow-icon-leftmall').click(function(){
  $('.slider-holder').slick('slickPrev');
})

$('.arrow-icon-rightmall').click(function(){
  $('.slider-holder').slick('slickNext');
});

 
 $(function() { 
// Card's slider
  var $carousel = $('.slider-for');
  $carousel
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed:5000,
      infinite: true,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    })
    
  $('.slider-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  });
});


 $('.locationlistslider').slick({
  slidesToShow: 1,
  dots:true,
  arrows: false,
  fade: true,
  centerMode: false,
 });




    var btn = $('#topbtn');
        $(window).scroll(function() {
          if ($(window).scrollTop() > 1200) {
            btn.addClass('show').fadeIn();
          } else {
            btn.removeClass('show').fadeOut();
          }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 100); 
        return false; 
    });

  $(function($) {
      $(window).on('scroll', function() {
      if ($(this).scrollTop() >= 100) {
        $('.header-area').addClass('fixed-top');
      } else if ($(this).scrollTop() == 0) {
        $('.header-area').removeClass('fixed-top');
      }
    });
    
    function adjustNav() {
      var winWidth = $(window).width(),
        dropdown = $('.dropdown'),
        dropdownMenu = $('.dropdown-menu');
      
    //   if (winWidth >= 768) {
    //     dropdown.on('mouseenter', function() {
    //       $(this).addClass('show').children(dropdownMenu).addClass('show');
    //     });
        
    //     dropdown.on('mouseleave', function() {
    //       $(this).removeClass('show').children(dropdownMenu).removeClass('show');
    //     });
    //   } else {
    //     dropdown.off('mouseenter mouseleave');
    //   }
    }
    
    $(window).on('resize', adjustNav);
    
    adjustNav();
  });
if ($(window).width() > 989 ) {
    //$(".row").removeClass('unitplansliderg2');
    // $(".twogrid").addClass('row');
}
if ($(window).width() < 990 ) {
    //$(".row").addClass('unitplanslider');
    $(".unitplansliderg2").removeClass('row');
    $(document).on('click', '.dropdown', function(){
        $(this).find(".dropdown-menu").toggleClass('showd');
    });
}
$(document).on('click', '.sddowntext', function(){
    $(this).find(".hideslidetext").toggleClass('textslidetoggle');
    $(this).find("span").toggleClass('rotdown');
 });
 $('.hdbg,.subnavdown').mouseenter(function(){
    $('.header-area').addClass("headerbg")
 })
  $('.hdbg,.subnavdown').mouseleave(function(){
    $('.header-area').removeClass("headerbg")
 })
 if ($(window).width() < 767 ) {
    $('.dropdown-menu').removeClass('abdrop');
    $('.addac').removeClass('hdbg');
    $(".header-area").addClass('headerbg');
    $('#main-nav').addClass('navbg');
    $(document).on('click', '.addac', function(){
        $(this).find(".abdrop").toggleClass('show');
        $(this).find(".overlaymobbg").toggleClass('active');
        $(this).find(".nav-item .addac").toggleClass('active');
    });
 }
 $('.navbar-toggler').click(function(){
     $('#main-nav').toggleClass('show');
     $('html,body').toggleClass('hidescroll');
     $('.navbar-toggler').toggleClass('collapsed');
  });

$(function() {
  var loc = window.location.href; 
  if(/gallery.php/.test(loc) ){
    $('.header-area').addClass('blackbg');
  }
  if(/privacy-policy.php/.test(loc) ){
     $('.header-area').addClass('blackbg');
  }
  if(/social-media-policy.php/.test(loc) ){
$('.header-area').addClass('blackbg');
  }
  if(/contact.php/.test(loc) ){
    $('.header-area').addClass('blackbg');
  }
});

$('.grislidewrap').mouseover(function(){
  $('.hidetext').hide();
});
$('.grislidewrap').mouseout(function () {
  $('.hidetext').show();
});
if ($(window).width() < 768 ) {
    $('.grislidewrap').mouseover(function(){
      //$('.hidetext').hide();
    });
    $('.grislidewrap').mouseout(function () {
      $('.hidetext').show();
    });
}
                            if($(window).width() < 768){
		$(".registerform").removeClass("slideleft");
	 $('.sgff').html("Enquire Now");
       $('.sgfrfi').css('right','-86px');
	}else{
$(".registerform").addClass("slideleft");
$('.sgff').html("Close");
    $('.sgfrfi').css('right','-60px'); 
}

$('.fixedbtn').click(function(){
  $('.registerform').toggleClass('slideleft')
  
 var newvalue = $( "#sgnewcls" ).hasClass( "slideleft" );
 if(newvalue == 1){
     $('.sgff').html("Close");
      $('.sgfrfi').css('right','-60px');
 }else{
      $('.sgff').html("Enquire Now");
      $('.sgfrfi').css('right','-86px');
 }
});

$('.hidediv').click(function(){
    $('.openbtn').removeClass('close');
});

   
// for company associates
$('.customer-logos').slick({
    dots: false,
    infinite:true,
    slidesToShow:5,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear', 
    prevArrow: false,
    nextArrow: false, 
    initialSlide: 1,
    draggable: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
  
            }
  
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
  
            }
  
        }]
  });
   
       function abc(){
                           $(".js-example-basic-single").select2();
              }   
                  
       
                         
                           
                           
                           
		var url  =  window.location.href;     
        /*var pathname = new URL(url).pathname;
        console.log(pathname);  */    
        var pathname = url.split( '/' );
       	var updated_url= pathname[ pathname.length - 1 ];
        var forother = document.getElementById("forother");
       	var forwhatsapp = document.getElementById("forwhatsapp");
        if(updated_url == "customer_support.php"){
                       
          forother.style.display = "none";
          forwhatsapp.style.display = "inline-flex";
        }else{
        
           forwhatsapp.style.display = "none";
          forother.style.display = "inline-flex";
                   
                           }
       

     
       
                     
});   
                           
                           
           
   
