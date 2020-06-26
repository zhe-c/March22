(function(document, window, $){
	$(document).ready(function(){

		// Variables
		var 
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			$header = $('header');

		// header anchor tags
		function headerAnchors(){
			var pageDirection = '';
			var thisElement;
			var timeout;
			$header.find('nav li a').click(function(event){
				event.preventDefault();
					$('.cube').removeClass('reverse-' + pageDirection);
				thisElement = $(this);
				pageDirection = thisElement.data('direction');
				reverseDirection = thisElement.data('reverse-direction');
				thisElement.parent().addClass('active').siblings().removeClass('active');
					$('.cube').addClass('reverse-' + pageDirection);

					$header.addClass('go-out');
				$('#wrap').addClass('active');
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					$header.removeClass('go-out');
					$('#wrap').removeClass('active');
				}, 1000);
			});
		}headerAnchors();
		$(window).resize(function(){

			// Vars
				windowWidth = $(window).width();
				windowHeight = $(window).height();
			// Functions
		});
	});
})(document, window, jQuery);

////////////////////////next is contact page////////
function myFunction() {
	if(window.innerHeight > 550){
		$(".substitute").hide();
	}
	else if(window.innerHeight < 550) {
		$(".substitute").show();
	}
}
myFunction();
//learn from https://www.runoob.com/ onresize 


////////////////////////////////////////////////
certifySwiper = new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 15,
	autoplay: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		// clickable :true,
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

})


