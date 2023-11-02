$(document).ready(function(){
    
    
	if ($(window).width() < 990) {	    
	    $(".navbar-nav .nav-link").click(function() {
        $(".navbar-collapse").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      }) 
    }
$("[data-fancybox]").fancybox({
		// Options will go here
	});
	
$(window).load(function() {
  $(".spinner").delay(6000).fadeOut("slow");
//   $(".txt").delay(2000).fadeOut("slow");
  $(".page-loader").delay(6000).fadeOut("slow");
  //setTimeout(function(){ $('.spinner').fadeOut('slow').css('display','block'); }, 10000);
  
})

$('#fullpage').fullpage({
		anchors: ["home","shippingzone","entertainment","playzone","foodzone","location","video","floorplan","brand","contact",],
        //scrollBar: true,
    	//sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#000'],
    	menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ["Home","Shipping-zone","Entertainment","Play-zone","Food-zone","Location","Videos","Floor-plan","Brand","Contact Us"],

		responsiveWidth: 768,
		afterResponsive: function(isResponsive){
			
		}
	});



    $('.top-head ul li a.btns').click(function(){
      $('.banner_form').slideToggle();
    })

    $('.carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        //   centerMode: true,
        dots:false,
        autoplay:true,
        autoplaySpeed:5000,
        speed:900,
        prevArrow: false,
        nextArrow: false,
        responsive: [{ 
          breakpoint: 900,
          settings: {
              dots: false,
              slidesToShow: 1,
          },
          breakpoint: 500,
          settings: {
              dots: false,
              slidesToShow: 1,
          } 
        }]
        });

        $('.carouselbrand').slick({
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
  
        }, 
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            
        }
        
        ]
        });        
        
        
         $('.carouselfloor').slick({
        dots: false,
    infinite:true,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay: false,
    speed: 5000,
    cssEase: 'linear', 
    prevArrow: true,
    nextArrow: true, 
    initialSlide: 1,
    draggable: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
  
            }
  
        }, 
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
            
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            
        }
        
        ]
        });        
        
        
        $('.shappingslide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //   centerMode: true,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        speed:500,
        prevArrow: false,
        nextArrow: false,
        });
        
        $('.shappingslideenter').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //   centerMode: true,
        dots:false,
        autoplay:true,
        autoplaySpeed:4000,
        speed:500,
        prevArrow: false,
        nextArrow: false,
        });
        
        $('.shappingslideplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //   centerMode: true,
        dots:false,
        autoplay:true,
        autoplaySpeed:3000,
        speed:500,
        prevArrow: false,
        nextArrow: false,
        });
        
        $('.shappingslidefood').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //   centerMode: true,
        dots:false,
        autoplay:true,
        autoplaySpeed:4000,
        speed:500,
        prevArrow: false,
        nextArrow: false,
        });
        
        
        $('.fixedbtn').click(function(){
            $('.registerform').toggleClass('slideleft');
        });
        
    
    
    // $('.floorplanslide').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots:false,
    //     prevArrow: true,
    //     nextArrow: true,
    //     });
        
        
        $('.floorplanslide').slick({
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
  $('.floorplanslide').slick('slickPrev');
});

$('.arrow-icon-rightpl').click(function(){
  $('.floorplanslide').slick('slickNext');
}); 
   
	
});



