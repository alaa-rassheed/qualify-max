(function ($) {
	"use strict";

	var windowOn = $(window);

	// Initialize Fancybox for specific galleries
	function initFancybox() {
		if (typeof Fancybox !== 'undefined') {
			Fancybox.bind('[data-fancybox="gallery"], [data-fancybox="gallery-b"], [data-fancybox="gallery-c"]');
		}
	}

	// Set background images from data attributes
	function setBackgroundImages() {
		$("[data-background]").each(function () {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
		});
	}

	// Show/hide back-to-top button
	function handleBackToTop() {
		var btnWrapper = $('.back-to-top-wrapper');
		windowOn.scroll(function () {
			btnWrapper.toggleClass('back-to-top-btn-show', windowOn.scrollTop() > 300);
		});
		$('#back_to_top').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 300);
		});
	}

	// Handle search form interactions
	function initSearchForm() {
		$(".td-search-click").on("click", function () {
			$(".td-header-input-toggle, .input-body-overlay").addClass("active");
		});
		$(".input-body-overlay").on("click", function () {
			$(".td-header-input-toggle, .input-body-overlay").removeClass("active");
		});
	}

	// Initialize Magnific Popup for videos and images
	function initMagnificPopup() {
		$(".popup-video").magnificPopup({ type: "iframe" });
		$(".popup-image").magnificPopup({
			type: 'image',
			gallery: { enabled: true },
			mainClass: 'mfp-with-zoom',
			removalDelay: 500
		});
	}

	// Handle header height
	function handleHeaderHeight() {
		if ($('.td-header-height').length) {
			var headerHeight = document.querySelector(".td-header-height").offsetHeight;
			$(".td-header-height").css('height', headerHeight);
		}
	}

	// Handle language toggle
	function handleLanguageToggle() {
		if ($("#td-header-lang-toggle").length) {
			window.addEventListener('click', function (e) {
				$(".td-lang-list").toggleClass("td-lang-list-open", e.target.closest('#td-header-lang-toggle'));
			});
		}
	}

	// Initialize side panel and media size adjustments
	function initSidePanel() {
		function mediaSize() {
			if (window.matchMedia('(min-width: 768px)').matches) {
				$('.col-custom').on('click', function () {
					$('.col-custom').removeClass('active');
					$(this).addClass('active');
				});
			} else {
				$(".col-custom").addClass("active");
			}
		}
		mediaSize();
		window.addEventListener('resize', mediaSize);
	}

	// Initialize progress bars
	function initProgressBars() {
		$("[data-width]").each(function () {
			$(this).css("width", $(this).attr("data-width"));
		});
	}

	// Initialize WOW.js for animations
	function initWOW() {
		if (typeof WOW === 'function') {
			new WOW().init();
		}
	}

	// Initialize Nice Select
	function initNiceSelect() {
		$('select').niceSelect();
	}

	// Handle sticky header
	function handleStickyHeader() {
		windowOn.on('scroll', function () {
			$("#header-sticky").toggleClass("td-header-sticky", windowOn.scrollTop() >= 100);
		});
	}

	// Handle preloader
	function handlePreloader() {
		var loader = document.getElementById("preloader");
		if (loader) {
			window.addEventListener("load", function () {
				loader.style.display = "none";
			});
		}
	}

	// Document ready
	$(document).ready(function () {
		initFancybox();
		setBackgroundImages();
		handleBackToTop();
		initSearchForm();
		initMagnificPopup();
		handleHeaderHeight();
		handleLanguageToggle();
		initSidePanel();
		initProgressBars();
		initWOW();
		initNiceSelect();
		handleStickyHeader();
		handlePreloader();
	});

})(jQuery);
