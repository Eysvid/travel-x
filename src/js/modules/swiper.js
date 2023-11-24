import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.swiper', {
		loop: true,  
		parallax: true,
		speed: 1000,
		keyboard: {
			enabled: true
		},
		pagination: {
			el: '.slider-controls__count',
			type: 'fraction'
		},
		navigation: {
			nextEl: '#sliderNext',
			prevEl: '#sliderPrev',
		},
		scrollbar: {
			el: '.swiper-scrollbar'
		}
	});
}

export default swiperFunc;