(function ($) {
	"use strict";

	var windowOn = $(window);

	// Function to initialize Fancybox
	function initFancybox() {
		if (typeof Fancybox !== 'undefined') {
			Fancybox.bind('[data-fancybox="gallery"], [data-fancybox="gallery-b"], [data-fancybox="gallery-c"]', {
				// Your custom options for galleries
			});
		}
	}

	// Function to set background images
	function setBackgroundImages() {
		$("[data-background]").each(function () {
			$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
		});
	}

	// Function to handle back-to-top button
	function handleBackToTop() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');
		
		windowOn.on('scroll', function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 300);
		});
	}

	// Function to set header height
	function setHeaderHeight() {
		var headerHeightElem = document.querySelector(".td-header-height");
		if (headerHeightElem) {
			var setHeaderHeight = headerHeightElem.offsetHeight;
			$(".td-header-height").css('height', setHeaderHeight);
		}
	}

	// Function to handle search form and FAQ accordion
	function handleSearchAndFAQ() {
		$(".td-search-click").on("click", function () {
			$(".td-header-input-toggle, .input-body-overlay").addClass("active");
		});

		$(".input-body-overlay").on("click", function () {
			$(".td-header-input-toggle, .input-body-overlay").removeClass("active");
		});

		$('.td-faq-wrapper .accordion-item').on("click", function () {
			$(this).addClass('td-faq-active').siblings().removeClass('td-faq-active');
		});
	}

	// Function to initialize Magnific Popup
	function initMagnificPopup() {
		$(".popup-video").magnificPopup({ type: "iframe" });
		$('.popup-image').magnificPopup({
			type: 'image',
			gallery: { enabled: true },
			mainClass: 'mfp-with-zoom',
			removalDelay: 500
		});
	}

	// Function to handle language toggle
	function handleLanguageToggle() {
		var langToggle = document.getElementById('td-header-lang-toggle');
		if (langToggle) {
			document.addEventListener('click', function (e) {
				if (langToggle.contains(e.target)) {
					$(".td-lang-list").toggleClass("td-lang-list-open");
				} else {
					$(".td-lang-list").removeClass("td-lang-list-open");
				}
			});
		}
	}

	// Function to handle side panel and resizing
	function handleSidePanel() {
		function mediaSize() {
			if (window.matchMedia('(min-width: 768px)').matches) {
				const panels = document.querySelectorAll('.col-custom');
				panels.forEach(panel => {
					panel.addEventListener('click', () => {
						removeActiveClasses();
						panel.classList.add('active');
					});
				});

				function removeActiveClasses() {
					panels.forEach(panel => {
						panel.classList.remove('active');
					});
				}
			} else {
				$(".col-custom").addClass("active");
			}
		}

		mediaSize();
		window.addEventListener('resize', mediaSize, false);
	}

	// Function to handle service item hover
	function handleServiceHover() {
		$('.service__item-8').on("mouseenter", function () {
			$(this).addClass('active').siblings().removeClass('active');
			$('#service-bg-img').removeClass().addClass($(this).attr('rel'));
		});
	}

	// Function to initialize PureCounter
	function initPureCounter() {
		new PureCounter();
		new PureCounter({
			filesizing: true,
			selector: ".filesizecount",
			pulse: 2,
		});
	}

	// Function to handle mobile menu
	function handleMobileMenu() {
		if ($('.td-main-menu-content').length && $('.td-main-menu-mobile').length) {
			let navContent = document.querySelector(".td-main-menu-content").outerHTML;
			let mobileNavContainer = document.querySelector(".td-main-menu-mobile");
			mobileNavContainer.innerHTML = navContent;

			let arrow = $(".td-main-menu-mobile .has-dropdown > a");

			arrow.each(function () {
				let self = $(this);
				let arrowBtn = document.createElement("BUTTON");
				arrowBtn.classList.add("dropdown-toggle-btn");
				arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";

				self.append(arrowBtn);

				self.find("button").on("click", function (e) {
					e.preventDefault();
					let self = $(this);
					self.toggleClass("dropdown-opened");
					self.parent().toggleClass("expanded");
					self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
					self.parent().parent().children(".td-submenu").slideToggle();
				});
			});
		}
	}

	// Function to handle sidebar
	function handleSidebar() {
		$(".td-menu-bar").on("click", function () {
			$(".tdoffcanvas").addClass("opened");
			$(".body-overlay").addClass("apply");
		});
		$(".close-btn").on("click", function () {
			$(".tdoffcanvas").removeClass("opened");
			$(".body-overlay").removeClass("apply");
		});
		$(".body-overlay").on("click", function () {
			$(".tdoffcanvas").removeClass("opened");
			$(".body-overlay").removeClass("apply");
		});
	}

	// Function to handle progress bars
	function handleProgressBars() {
		$("[data-width]").each(function () {
			$(this).css("width", $(this).attr("data-width"));
		});
	}

	// Function to initialize WOW.js
	function initWOW() {
		new WOW().init();
	}

	// Function to initialize Parallax.js
	function initParallax() {
		if ($('.scene').length > 0) {
			$('.scene').parallax({ scalarX: 10.0, scalarY: 15.0 });
		}

		if ($('.scene-2').length > 0) {
			$('.scene-2').parallax({ scalarX: 15.0, scalarY: 15.0 });
		}
	}

	// Function to handle button hover animation
	function handleButtonHover() {
		$('.td-btn-rounded').on('mouseenter', function (e) {
			var x = e.pageX - $(this).offset().left;
			var y = e.pageY - $(this).offset().top;

			$(this).find('.td-btn-circle-dot').css({
				top: y,
				left: x
			});
		});
	}

	// Function to handle Knob.js
	function handleKnob() {
		if (typeof ($.fn.knob) != 'undefined') {
			$('.knob').each(function () {
				var $this = $(this),
					knobVal = $this.attr('data-rel');
				$this.knob({
					'draw': function () {
						$(this.i).val(this.cv + '%');
					}
				});

				$this.appear(function () {
					$({ value: 0 }).animate({ value: knobVal }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.val(Math.ceil(this.value)).trigger('change');
						}
					});
				}, { accX: 0, accY: -150 });
			});
		}
	}

	// Function to handle one-page navigation
	function handleOnePageNav() {
		$('#section-time').onePageNav({
			currentClass: 'current',
			scrollSpeed: 950
		});
	}

	// Function to handle sticky header
	function handleStickyHeader() {
		windowOn.on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (scroll < 100) {
				$("#header-sticky").removeClass("td-header-sticky");
			} else {
				$("#header-sticky").addClass("td-header-sticky");
			}
		});
	}

	// Function to handle preloader
	function handlePreloader() {
		var loader = document.getElementById("preloader");
		if (loader) {
			window.addEventListener("load", function () {
				loader.style.display = "none";
			});
		}
	}

	// Initialize functions
	$(document).ready(function () {
		initFancybox();
		setBackgroundImages();
		handleBackToTop();
		setHeaderHeight();
		handleSearchAndFAQ();
		initMagnificPopup();
		handleLanguageToggle();
		handleSidePanel();
		handleServiceHover();
		initPureCounter();
		handleMobileMenu();
		handleSidebar();
		handleProgressBars();
		initWOW();
		initParallax();
		handleButtonHover();
		handleKnob();
		handleOnePageNav();
		handleStickyHeader();
		handlePreloader();
	});
})(jQuery);
