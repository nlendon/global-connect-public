
(function ($) {
	"use strict";
	$(window).on('scroll', function () {

		var y = $(window).scrollTop(),
			topBar = $('header');

		if (y > 1) {
			topBar.addClass('sticky');
		}
		else {
			topBar.removeClass('sticky');
		}

	});
	$(window).load(function () {

		$('#testimonial-slider').flexslider({
			namespace: "flex-",
			controlsContainer: "",
			animation: 'slide',
			controlNav: true,
			directionNav: true,
			smoothHeight: true,
			slideshowSpeed: 7000,
			animationSpeed: 600,
			randomize: false,
			touch: true,
		});

	});


	/*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------*/
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});


	/*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------*/
	$('input, textarea, select').placeholder()


	/*---------------------------------------------------- */
	/* ajaxchimp
	 ------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
		url: mailChimpURL

	});


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/*	Modal Popup
	------------------------------------------------------ */

	$('.modal a').magnificPopup({

		type: 'inline',
		fixedContentPos: false,
		removalDelay: 200,
		showCloseBtn: false,
		mainClass: 'mfp-fade'

	});

	$(document).on('click', '.close-popup, .close-popup-donate, .close-popup-players', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	/*----------------------------------------------------- */
	/* Back to top
------------------------------------------------------- */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

	// Show or hide the sticky footer button
	jQuery(window).scroll(function () {

		if (!($("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}

	});

})(jQuery);