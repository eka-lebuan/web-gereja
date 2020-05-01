

jQuery(function($) {


	// owl carousel
		$(document).ready(function(){
		  $(".owl-carousel").owlCarousel({
		  	loop:true,
		  	autoplay:true,
		  	autoplayTimeout:5000,
		  	dots:false,
		  	nav:true,
		  	navText:['<i class="mdi mdi-arrow-up" aria-hidden="true"></i>','<i class="mdi mdi-arrow-down" aria-hidden="true"></i>'],
		  	 responsive: {
	        0: {
	          items: 1
	        },
	        600: {
	          items: 2
	        },
	        1000: {
	          items: 4
	        }
	      }
		  });
		});

		

		var next_event_slider = new Swiper('.next-event-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            // when window width is <= 320px
            576: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2
            },
            // when window width is <= 640px
            1200: {
                slidesPerView: 3
            }
        },
        navigation: {
            nextEl: '.next-event-slider-wrap .swiper-button-next'
        }
    });


	

	
});


jQuery(function($) {

	// owl carousel

	$(document).ready(function(){
	  $("#owl-diskusi").owlCarousel();
	});
	 
	 var owl = $('#owl-diskusi');
	owl.owlCarousel({
	    loop:true,
	    autoplay:true,
	  	dots:false,
	  	nav:true,
	  	navText:['<i class="mdi mdi-arrow-left" aria-hidden="true"></i>','<i class="mdi mdi-arrow-right" aria-hidden="true"></i>'],
	  	responsive: {
	        0: {
	          items: 1
	        },
	        600: {
	          items: 2
	        },
	        1000: {
	          items: 2
	        }
	      }
	});
	
});

jQuery(function($) {

	// owl carousel

	$(document).ready(function(){
	  $("#owl-potret").owlCarousel();
	});
	 
	 var owl = $('#owl-potret');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    autoplay:false,
	  	dots:false,
	  	nav:true,
	  	navText:['<i class="mdi mdi-arrow-left" aria-hidden="true"></i>','<i class="mdi mdi-arrow-right" aria-hidden="true"></i>']
	});

});

jQuery(function($) {

	// owl carousel

	$(document).ready(function(){
	  $("#owl-slider").owlCarousel();
	});
	 
	 var owl = $('#owl-slider');
	owl.owlCarousel({
	    loop:true,
	    autoplay:true,
	  	dots:false,
	  	animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	  	nav:true,
	  	navText:['<i class="mdi mdi-arrow-left" aria-hidden="true"></i>','<i class="mdi mdi-arrow-right" aria-hidden="true"></i>'],
	  	responsive: {
	        0: {
	          items: 1
	        },
	        600: {
	          items: 2
	        },
	        1000: {
	          items: 4
	        }
	      }
	});
	
});




