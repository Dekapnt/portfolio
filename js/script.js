'use stric'
//Бургер меню
const menuBurger = document.querySelector(".js-burger");

if (menuBurger) {
	menuBurger.addEventListener('click', function(e){
		const sitebar = document.querySelector('.js-sitebar');
		const sitebarFon = document.querySelector('.js-fon');
		menuBurger.classList.toggle('_active-burger');
		sitebar.classList.toggle('_active-burger');
		sitebarFon.addEventListener('click', function(e){
			menuBurger.classList.remove('_active-burger');
			sitebar.classList.remove('_active-burger');
		})
	})
};


console.log(document.querySelectorAll('.description__text')[0])
//Кнопка изменения цвета сайт бара и хедера
const switchColor = document.querySelector('.js-switch');
if (switchColor) {
	switchColor.addEventListener('click', function(e){
		e.preventDefault();
		if (switchColor.classList.contains('active') == false) {
			switchColor.classList.toggle('active');
			document.querySelector('.sitebar').style.backgroundColor = 'rgb(20, 20, 20)';
			document.querySelector(".sitebar").style.setProperty('--sq-color', '#fff')
			document.querySelector('.header').style.backgroundColor = '#000';
			document.querySelector('.header__author').style.color = "#FFFCF5";
			document.querySelector('.header__author').style.textShadow = "-2px -2px 3px rgba(255, 255, 255, 1)";
			const sitebarLinks = document.querySelectorAll('.sitebar__link');
			for (let i = 0; i < sitebarLinks.length; i++) {sitebarLinks[i].style.color = "rgba(255, 252, 245, 0.3)";}
			document.querySelector('._svlActive').style.color = "#FFFCF5";
			document.querySelector('.js-switch').style.color = "rgba(255, 252, 245, 1)";
			for (let i = 0; i < menuBurger.children.length; i++) {
				menuBurger.children[i].style.backgroundColor = '#FFFCF5';
			}
			document.querySelector('.sitebat__body-switch').classList.toggle('_black');
		} else {
			switchColor.classList.toggle('active');
			document.querySelector('.sitebar').style.backgroundColor = '';
			document.querySelector('.header').style.backgroundColor = '';
			document.querySelector('.header__author').style.color = "";
			document.querySelector('.header__author').style.textShadow = "";
			const sitebarLinks = document.querySelectorAll('.sitebar__link');
			for (let i = 0; i < sitebarLinks.length; i++) {sitebarLinks[i].style.color = "";}
			document.querySelector('._svlActive').style.color = "";
			document.querySelector('.js-switch').style.color = "";
			for (let i = 0; i < menuBurger.children.length; i++) {
				menuBurger.children[i].style.backgroundColor = '';
			}
			document.querySelector(".sitebar").style.setProperty('--sq-color', '#000');
			document.querySelector('.sitebat__body-switch').classList.toggle('_black');
		}
		//контентная часть
		const contentAbout = document.querySelector('.js-content_about');
		if (contentAbout) {
			if (contentAbout.classList.contains('active') == false) {
				contentAbout.classList.toggle('active');
				contentAbout.style.backgroundColor = 'rgb(20, 20, 20)'
				document.querySelector('.description__title').style.color = '#FFFCF5';
				document.querySelector('.description__text').style.color = 'rgba(255, 252, 245, 0.8)';
				for (let i = 0; i < document.querySelectorAll('.description__text_dark').length; i++) {
					document.querySelectorAll('.description__text_dark')[i].style.color = '#D3902A';
				}
			} else {
				contentAbout.classList.toggle('active');
				contentAbout.style.backgroundColor = ''
				document.querySelector('.description__title').style.color = '';
				document.querySelector('.description__text').style.color = '';
				for (let i = 0; i < document.querySelectorAll('.description__text_dark').length; i++) {
					document.querySelectorAll('.description__text_dark')[i].style.color = '';
				}
			}
		}
	})
}

