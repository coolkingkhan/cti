(function($, window, document) {
    'use strict';

// call slider 

	$(function() {
		$(".carousel").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 500,            // Integer: Speed of the transition, in milliseconds
		  timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
		  pager: true,           // Boolean: Show pager, true or false
		  nav: true,             // Boolean: Show navigation, true or false
		  namespace: "carousel",   // String: Change the default namespace used
		  maxwidth: "1180",           // Integer: Max-width of the slideshow, in pixels
	      prevText: "❮",   // String: Text for the "previous" button
	      nextText: "❯",       // String: Text for the "next" button
		});
	});

}(jQuery, window, document));