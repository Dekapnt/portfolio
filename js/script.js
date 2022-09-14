'use stric'
//Бургер меню
const menuBurger = document.querySelector(".js-burger");

if (menuBurger) {
	menuBurger.addEventListener('click', function(e){
		const sitebar = document.querySelector('.js-sitebar');
		const sitebarFon = document.querySelector('.js-fon');
		menuBurger.classList.toggle('_active-burger');
		sitebar.classList.toggle('_active-burger');
		sitebarFon.classList.toggle('_active');
		sitebarFon.addEventListener('click', function(e){
			menuBurger.classList.remove('_active-burger');
			sitebar.classList.remove('_active-burger');
			sitebarFon.classList.remove('_active');
		})
	})
};


//Кнопка изменения цвета сайт бара и хедера
const switchColor = document.querySelector('.js-switch');
if (switchColor) {
	switchColor.addEventListener('click', function(e){
		e.preventDefault();
		if (switchColor.classList.contains('active') == false) {
			switchColor.classList.toggle('active');
			//header
			document.querySelector('.header').style.backgroundColor = '#000';
			document.querySelector('.header__author').style.color = "#FFFCF5";
			document.querySelector('.header__author').style.textShadow = "-2px -2px 3px rgba(255, 255, 255, 1)";
			//sitebar
			document.querySelector('.sitebar').style.backgroundColor = 'rgb(20, 20, 20)';
			document.querySelector(".sitebar").style.setProperty('--sq-color', '#fff')
			const sitebarLinks = document.querySelectorAll('.sitebar__link');
			for (let i = 0; i < sitebarLinks.length; i++) {sitebarLinks[i].style.color = "rgba(255, 252, 245, 0.3)";}
			document.querySelector('._svlActive').style.color = "#FFFCF5";
			document.querySelector('.js-switch').style.color = "rgba(255, 252, 245, 1)";
			for (let i = 0; i < menuBurger.children.length; i++) {
				menuBurger.children[i].style.backgroundColor = '#FFFCF5';
			}
			document.querySelector('.sitebat__body-switch').classList.toggle('_black');
			//works
			document.querySelector('.js-works').style.backgroundColor = 'rgb(20, 20, 20)';
			document.querySelector('.works__title').style.color = 'rgba(255, 252, 245, 1)';
			document.querySelector('.works__subtitle').style.color = 'rgba(255, 252, 245, 0.8)';
			const worksLinks = document.querySelectorAll('.works__link');
			for (let i = 0; i < worksLinks.length; i++) {
				worksLinks[i].style.color = '#FFFCF5';
			}
			//resume
			document.querySelector('.resume').style.backgroundColor = 'rgb(20, 20, 20)';
			document.querySelector('.resume__title').style.color = '#FFFCF5';
			document.querySelector('.resume__subtitle').style.color = '#FFFCF5CC';

			const resumeYear = document.querySelectorAll('.items-resume__year');
			const achievementsTitle = document.querySelectorAll('.achievements__title');
			const achievementsSubtitle = document.querySelectorAll('.achievements__subtitle');
			console.log(resumeYear);
			for (var i = 0; i < resumeYear.length; i++) {
				resumeYear[i].style.color = '#FFFCF5';
				achievementsTitle[i].style.color = '#FFFCF5';
				achievementsSubtitle[i].style.color = 'rgba(255, 252, 245, 0.7)';
				console.log(resumeYear);
			}
			const achievementsList = document.querySelectorAll('.achievements__list');
			for (var i = 0; i < achievementsList.length; i++) {
				achievementsList[i].style.color = 'rgba(255, 252, 245, 0.7)';
			}
		} else {
			switchColor.classList.toggle('active');
			//header
			document.querySelector('.header').style.backgroundColor = '';
			document.querySelector('.header__author').style.color = "";
			document.querySelector('.header__author').style.textShadow = "";
			//sitebar
			const sitebarLinks = document.querySelectorAll('.sitebar__link');
			document.querySelector('.sitebar').style.backgroundColor = '';
			for (let i = 0; i < sitebarLinks.length; i++) {sitebarLinks[i].style.color = "";}
			document.querySelector('._svlActive').style.color = "";
			document.querySelector('.js-switch').style.color = "";
			for (let i = 0; i < menuBurger.children.length; i++) {
				menuBurger.children[i].style.backgroundColor = '';
			}
			document.querySelector(".sitebar").style.setProperty('--sq-color', '#000');
			document.querySelector('.sitebat__body-switch').classList.toggle('_black');
			//works
			document.querySelector('.js-works').style.backgroundColor = '';
			document.querySelector('.works__title').style.color = '';
			document.querySelector('.works__subtitle').style.color = '';
			const worksLinks = document.querySelectorAll('.works__link');
			for (let i = 0; i < worksLinks.length; i++) {
				worksLinks[i].style.color = '';
			}
			//resume
			document.querySelector('.resume').style.backgroundColor = '';
			document.querySelector('.resume__title').style.color = '';
			document.querySelector('.resume__subtitle').style.color = '';

			const resumeYear = document.querySelectorAll('.items-resume__year');
			const achievementsTitle = document.querySelectorAll('.achievements__title');
			const achievementsSubtitle = document.querySelectorAll('.achievements__subtitle');
			for (var i = 0; i < resumeYear.length; i++) {
				resumeYear[i].style.color = '';
				achievementsTitle[i].style.color = '';
				achievementsSubtitle[i].style.color = '';
			}
			const achievementsList = document.querySelectorAll('.achievements__list');
			for (var i = 0; i < achievementsList.length; i++) {
				achievementsList[i].style.color = '';
			}
		}
		//контентная часть
		const contentAbout = document.querySelector('.js-content_about');
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
	})
}

//Кнопки сайт бара


function linkSwitch (link1, link2, link3, link4) {
	sitebarLinks[link1].addEventListener('click', function(e){
		e.preventDefault();
		if (switchColor.classList.contains('active')) {
			const jsContents = document.querySelectorAll('.js-contents');
			if (!sitebarLinks[link1].classList.contains('_svlActive')) {
				sitebarLinks[link1].classList.toggle('_svlActive');
				sitebarLinks[link1].style.color = '#FFFCF5';
				jsContents[link1].classList.toggle('_disable');
				if (sitebarLinks[link2].classList.contains('_svlActive')) {
					sitebarLinks[link2].classList.toggle('_svlActive');
					sitebarLinks[link2].style.color = 'rgba(255, 252, 245, 0.3)';
					jsContents[link2].classList.toggle('_disable');
				} else if (sitebarLinks[link3].classList.contains('_svlActive')) {
					sitebarLinks[link3].classList.toggle('_svlActive');
					sitebarLinks[link3].style.color = 'rgba(255, 252, 245, 0.3)';
					jsContents[link3].classList.toggle('_disable');
				} else if (sitebarLinks[link4].classList.contains('_svlActive')) {
					sitebarLinks[link4].style.color = 'rgba(255, 252, 245, 0.3)';
					sitebarLinks[link4].classList.toggle('_svlActive');
					jsContents[link4].classList.toggle('_disable');
				}
			}
		} else {
			const jsContents = document.querySelectorAll('.js-contents');
			if (!sitebarLinks[link1].classList.contains('_svlActive')) {
				sitebarLinks[link1].classList.toggle('_svlActive');
				jsContents[link1].classList.toggle('_disable');
				if (sitebarLinks[link2].classList.contains('_svlActive')) {
					sitebarLinks[link2].classList.toggle('_svlActive');
					jsContents[link2].classList.toggle('_disable');
				} else if (sitebarLinks[link3].classList.contains('_svlActive')) {
					sitebarLinks[link3].classList.toggle('_svlActive');
					jsContents[link3].classList.toggle('_disable');
				} else if (sitebarLinks[link4].classList.contains('_svlActive')) {
					sitebarLinks[link4].classList.toggle('_svlActive');
					jsContents[link4].classList.toggle('_disable');
				}
			}
		}
	})
}


const sitebarLinks = document.querySelectorAll('.sitebar__link');
if (sitebarLinks) {
	linkSwitch(0, 1, 2, 3);
	linkSwitch(1, 0, 2, 3);
	linkSwitch(2, 1, 0, 3);
	linkSwitch(3, 1, 2, 0);
}


//Сортировка на "works"
const menuBurgerWorks = document.querySelector('.works__menu_burger-span');

if (menuBurgerWorks) {
	menuBurgerWorks.addEventListener('click', function(e){
		const worksMenuBurger = document.querySelector('.works__list');
		const worksMenuBurgerX = document.querySelector('.works__menu_burger-x');
		const worksFon = document.querySelector('.works__fon');
		if (!worksMenuBurger.classList.contains('_hidden')) {
			setTimeout(function() {}, 100);
		} else {
			worksMenuBurger.classList.toggle('_hidden');
		}
		worksMenuBurger.classList.toggle('_active');
		menuBurgerWorks.classList.toggle('_activeX');
		worksFon.classList.toggle('_active');
		worksFon.addEventListener('click', function(){
			const worksMenuBurger = document.querySelector('.works__list');
			const worksMenuBurgerX = document.querySelector('.works__menu_burger-x');
			const worksFon = document.querySelector('.works__fon');
			if (!worksMenuBurger.classList.contains('_hidden')) {
				setTimeout(function() {}, 100);
			} else {
				worksMenuBurger.classList.remove('_hidden');
			}
			worksMenuBurger.classList.remove('_active');
			menuBurgerWorks.classList.remove('_activeX');
			worksFon.classList.remove('_active');
		})
	})
};

const worksMenuExitBurger = document.querySelector('.works__list_exit');

if (worksMenuExitBurger) {
	worksMenuExitBurger.addEventListener('click', function(e){
		const worksMenuBurger = document.querySelector('.works__list');
		const worksMenuBurgerX = document.querySelector('.works__menu_burger-x');
		const worksFon = document.querySelector('.works__fon');
		if (!worksMenuBurger.classList.contains('_hidden')) {
			setTimeout(function() {}, 100);
		} else {
			worksMenuBurger.classList.toggle('_hidden');
		}
		worksMenuBurger.classList.toggle('_active');
		menuBurgerWorks.classList.toggle('_activeX');
		worksFon.classList.toggle('_active');
	})
}




//Основная работа сортировка на "works"
function switchLinkImageSwapActive(link1, link2, link3, link4){
	link1.classList.toggle('_active');

	if (link2.classList.contains('_active')) {
		link2.classList.toggle('_active');
	}
	if (link3.classList.contains('_active')) {
		link3.classList.toggle('_active');
	}
	if (link4.classList.contains('_active')) {
		link4.classList.toggle('_active');
	}
}


function switchLinkImage1(){
	if (!worksLinksSwichImage1.classList.contains('_active')) {
		switchLinkImageSwapActive(worksLinksSwichImage1, worksLinksSwichImage2, worksLinksSwichImage3, worksLinksSwichImage4);

		const lendingImage = document.querySelectorAll('.LendingImage');
		const site1Image = document.querySelectorAll('.site1Image');
		const allSiteImage = document.querySelectorAll('.AllSiteImage');

		for (var i = 0; i < lendingImage.length; i++) {
			lendingImage[i].classList.remove('_disable')
		}
		for (var i = 0; i < site1Image.length; i++) {
			site1Image[i].classList.remove('_disable')
		}
		for (var i = 0; i < allSiteImage.length; i++) {
			allSiteImage[i].classList.remove('_disable')
		}
	}
}

function switchLinkImage2(){
	if (!worksLinksSwichImage2.classList.contains('_active')) {
		switchLinkImageSwapActive(worksLinksSwichImage2, worksLinksSwichImage1, worksLinksSwichImage3, worksLinksSwichImage4);

		const lendingImage = document.querySelectorAll('.LendingImage');
		const site1Image = document.querySelectorAll('.site1Image');
		const allSiteImage = document.querySelectorAll('.AllSiteImage');

		for (var i = 0; i < lendingImage.length; i++) {
			lendingImage[i].classList.add('_disable');
		}
		for (var i = 0; i < site1Image.length; i++) {
			site1Image[i].classList.remove('_disable');
		}
		for (var i = 0; i < allSiteImage.length; i++) {
			allSiteImage[i].classList.add('_disable');
		}
	}
}

function switchLinkImage3(){
	if (!worksLinksSwichImage3.classList.contains('_active')) {
		switchLinkImageSwapActive(worksLinksSwichImage3, worksLinksSwichImage2, worksLinksSwichImage1, worksLinksSwichImage4);

		const lendingImage = document.querySelectorAll('.LendingImage');
		const site1Image = document.querySelectorAll('.site1Image');
		const allSiteImage = document.querySelectorAll('.AllSiteImage');

		for (var i = 0; i < lendingImage.length; i++) {
			lendingImage[i].classList.remove('_disable')
		}
		for (var i = 0; i < site1Image.length; i++) {
			site1Image[i].classList.add('_disable')
		}
		for (var i = 0; i < allSiteImage.length; i++) {
			allSiteImage[i].classList.add('_disable')
		}
	}
}

function switchLinkImage4(){
	if (!worksLinksSwichImage4.classList.contains('_active')) {
		switchLinkImageSwapActive(worksLinksSwichImage4, worksLinksSwichImage2, worksLinksSwichImage3, worksLinksSwichImage1);

		const lendingImage = document.querySelectorAll('.LendingImage');
		const site1Image = document.querySelectorAll('.site1Image');
		const allSiteImage = document.querySelectorAll('.AllSiteImage');

		for (var i = 0; i < lendingImage.length; i++) {
			lendingImage[i].classList.add('_disable')
		}
		for (var i = 0; i < site1Image.length; i++) {
			site1Image[i].classList.add('_disable')
		}
		for (var i = 0; i < allSiteImage.length; i++) {
			allSiteImage[i].classList.remove('_disable')
		}
	}
}


function switchLinkImage(number){
	if (number === 1) {
		switchLinkImage1()
	}
	if (number === 2) {
		switchLinkImage2()
	}
	if (number === 3) {
		switchLinkImage3()
	}
	if (number === 4) {
		switchLinkImage4()
	}
}


const worksLinksSwichImage1 = document.getElementById('WorkLinkAll');
const worksLinksSwichImage2 = document.getElementById('WorkLink1Site');
const worksLinksSwichImage3 = document.getElementById('WorkLinkLending');
const worksLinksSwichImage4 = document.getElementById('WorkLinkAllSite');

if (worksLinksSwichImage1) {
	worksLinksSwichImage1.addEventListener('click', function(e){
		e.preventDefault();
		switchLinkImage(1)
	})
}

if (worksLinksSwichImage2) {
	worksLinksSwichImage2.addEventListener('click', function(e){
		e.preventDefault();
		switchLinkImage(2)
	})
}

if (worksLinksSwichImage3) {
	worksLinksSwichImage3.addEventListener('click', function(e){
		e.preventDefault();
		switchLinkImage(3)
	})
}

if (worksLinksSwichImage4) {
	worksLinksSwichImage4.addEventListener('click', function(e){
		e.preventDefault();
		switchLinkImage(4)
	})
}
