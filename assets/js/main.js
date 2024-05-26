function myPageFunctions() {
	'use strict';

	const isMobile = {
		Android: () => navigator.userAgent.match(/Android/i),
		BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
		iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
		Opera: () => navigator.userAgent.match(/Opera Mini/i),
		Windows: () => navigator.userAgent.match(/IEMobile/i),
		any: () => (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
	};

	const fullHeight = () => {
		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(() => {
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	const parallax = () => {
		$(window).stellar();
	};
	//////////carla

	document.addEventListener('DOMContentLoaded', function() {
		var cards = document.querySelectorAll('.animate-box');

		function showCards() {
			cards.forEach(function(card) {
				if (isElementInViewport(card) && !card.classList.contains('show')) {
					card.classList.add('show');
				}
			});
		}

		function isElementInViewport(el) {
			var rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		}

		// Mostrar las tarjetas al cargar la página
		showCards();

		// Mostrar las tarjetas al hacer scroll
		window.addEventListener('scroll', showCards);
	});


	//////////carla
	const contentWayPoint = () => {
		let i = 0;
		$('.animate-box').waypoint((direction) => {
			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(() => {
					$('body .animate-box.item-animate').each((k) => {
						const el = $(this);
						setTimeout(() => {
							const effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}
							el.removeClass('item-animate');
						}, k * 100, 'easeInOutExpo');
					});
				}, 50);
			}
		}, { offset: '85%' });
	};

	const goToTop = () => {
		$('.js-gotop').on('click', (event) => {
			// event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			return false;
		});
		$(window).scroll(() => {
			const $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}
		});
	};

	const scrollArrow = () => {
		$('.js-scroll-down').on('click', (event) => {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $(window).scrollTop() + $(window).height()
			}, 500, 'easeInOutExpo');
			return false;
		});
		$(window).scroll(() => {
			const $win = $(window);
			const maxHeight = $(document).height() - $win.height();
			if ($win.scrollTop() >= maxHeight) {
				$('.js-scroll-down').fadeOut();
			} else {
				$('.js-scroll-down').fadeIn();
			}
		});
	};

	const pieChart = () => {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#0077ff',
			trackColor: "#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	const skillsWayPoint = () => {
		if ($('#fh5co-skills').length > 0) {
			$('#fh5co-skills').waypoint((direction) => {
				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(pieChart, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	const loaderPage = () => {
		$(".fh5co-loader").fadeOut("slow");
	};

	//Descargar CV
	document.addEventListener("DOMContentLoaded", function() {
		const downloadBtn = document.getElementById('downloadBtn');
		const pdfUrl = 'assets/docs/CAB_CV.pdf'; // Reemplaza 'ruta/al/archivo.pdf' con la ruta de tu archivo PDF

		downloadBtn.addEventListener('click', function() {
			window.open(pdfUrl, '_blank');
		});
	});

	//Scroll abajo
	document.addEventListener("DOMContentLoaded", function() {
		const scrollDownBtn = document.getElementById('scrollDownBtn');
		const scrollAmount = 500; // Cantidad de desplazamiento ajustable

		scrollDownBtn.addEventListener('click', function() {
			window.scrollBy({
				top: scrollAmount, // Desplaza hacia abajo una cantidad definida
				behavior: 'smooth' // Desplazamiento suave
			});
		});
	});



	// document.addEventListener("DOMContentLoaded", function() {
	// 	$('.js-scroll-down').on('click', function(event) {
	// 		event.preventDefault();
	// 		$('html, body').animate({
	// 			scrollTop: $(window).scrollTop() + $(window).height()
	// 		}, 5, 'easeInOutExpo');
	// 		return false;
	// 	});
	//
	// 	$(window).scroll(function() {
	// 		var $win = $(window);
	// 		var maxHeight = $(document).height() - $win.height();
	// 		if ($win.scrollTop() >= maxHeight) {
	// 			$('.js-scroll-down').fadeOut();
	// 		} else {
	// 			$('.js-scroll-down').fadeIn();
	// 		}
	// 	});
	// });

	// document.addEventListener('DOMContentLoaded', function() {
	// 	const scrollDownBtn = document.getElementById('scrollDownBtn');
	//
	// 	scrollDownBtn.addEventListener('click', function() {
	// 		const scrollStep = window.innerHeight / 30; // Ajusta la cantidad de desplazamiento
	// 		const scrollInterval = setInterval(function() {
	// 			if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
	// 				window.scrollBy(0, scrollStep);
	// 			} else {
	// 				clearInterval(scrollInterval);
	// 			}
	// 		}, 40); // Ajusta la velocidad de desplazamiento
	// 	});
	// });




	contentWayPoint();
	//goToTop();
	scrollArrow();
	loaderPage();
	fullHeight();
	parallax();
	// pieChart();
	skillsWayPoint();
}

myPageFunctions(); // Llama a la función principal para ejecutar todo el código
