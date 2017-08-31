$(function(){
	$('.gallery__list').slick({
		centerMode: true,
		slidesToShow: 1,
		lazyLoad: 'ondemand',
		variableWidth: true,
		nextArrow: "<div class='gallery__next slick-next'></div>",
		prevArrow: "<div class='gallery__prev slick-prev'></div>"
	});
	$('.js-modal').each(function(){
		$(this).fancybox();
	});
	$('input[data-mask]').each(function(){
		$(this).mask($(this).attr('data-mask'));
	});

	$('[href="#form"]').click(function(e) {
		e.preventDefault();
	    $('html, body').animate({
	        scrollTop: $("#form").offset().top
	    }, 2000);
	});

	sr = ScrollReveal();
	sr.reveal('.features__heading, .features__item, .features__about, .features__wow, .features__button', 200);
	sr.reveal('.feedback__heading, .feedback__item', {
		origin: 'left',
		delay: 300,
		scale: 1
	});
	sr.reveal('.feedback__bg', {
		origin: 'right',
		delay: 1000,
		duration: 1000,
		scale: 1
	});
	sr.reveal('.gallery', {
		distance: 0,
		scale: 1
	});
	sr.reveal('.about__left, .about__right', 300);
	sr.reveal('.couches__heading');
	sr.reveal('.couches__item', {
		delay: 300,
		scale: 1,
		duration: 1000,
		rotate: { x: 0, y: 90, z: 0 },
	});
	sr.reveal('.places__heading, .places__item, .places__map', {
		origin: 'top',
		scale: 1
	});
	sr.reveal('.form__heading, .form__box, .form__aside-item', {
		scale: 1,
		delay: 300
	});

	if($(window).width() >= 768){
		var s = skrollr.init();
	}
	$('.form .js-submit').on('click', function(e){
		e.preventDefault();
		$('#subscribe').submit();
	});
	$('#subscribe').on('submit', function(e){
		// Validate, ajax, etc
		$(this).addClass('is-complete');
		document.body.style.height = '';
		document.body.style.height = document.documentElement.clientHeight;
		e.preventDefault(); // don't submit actually
	});
	
});