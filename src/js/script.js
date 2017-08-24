$(function(){
	$('.gallery__list').slick({
		centerMode: true,
		slidesToShow: 1,
		lazyLoad: 'ondemand',
		variableWidth: true,
		nextArrow: "<div class='gallery__next slick-next'></div>",
		prevArrow: "<div class='gallery__prev slick-prev'></div>"
	});
});