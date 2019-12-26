// document.addEventListener("DOMContentLoaded", function() {

// 	// Custom JS

// });
$(function() {
	$('.link__description').click(function(e){
		e.preventDefault();
		if($(this).children('.open__btn').hasClass('opened')){
			$(this).children('.open__btn').removeClass('opened');
			$(this).children('.hidden__txt').css('display', 'none');
		} else{
			$(this).children('.open__btn').addClass('opened');
			$(this).children('.hidden__txt').css('display', 'block');
		}
		
	})
	$('.hamburger').click(function(){
		if( $(this).children().hasClass('first_opened') && $(this).children().hasClass('second_opened') && $('.mobile__phones').hasClass('clicked')){

			$(this).children('.first_opened').removeClass('first_opened').addClass('first__line');
			$(this).children('.second_opened').removeClass('second_opened').addClass('second__line');
			$('.mobile__phones').removeClass('clicked').addClass('header__phones__mobile');
			$('.header__mobile__menu').css({'height': '0', 'min-height': 'auto'});
			$('.mobile__menu__inner').css({'opacity': '0', 'display': 'none'});

		} else{
			$(this).children('.first__line').addClass('first_opened').removeClass('first__line');
			$(this).children('.second__line').addClass('second_opened').removeClass('second__line');
			$('.header__mobile__menu').css({'height': '100vh', 'min-height': '568px'});
			$('.mobile__phones').addClass('clicked').removeClass('header__phones__mobile');
			$('.mobile__menu__inner').css({'opacity': '1', 'display': 'block'});
		}
		
	});

	$(".header__menu  a, .header__menu__mbl a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	$(".phone").inputmask("999(99) 999-9999");

});