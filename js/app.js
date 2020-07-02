let popupFeedback = document.querySelector('.popup__write-us');
let popupFeedbackForm = document.querySelector('.popup__write-us .write-us');
let popupMap = document.querySelector('.popup__map');
let popupMapContainer = document.querySelector('.popup__map .popup__map-container');
let linkMap = document.querySelector('.link-map');
let search = document.querySelector('.search__btn');
let searchInput = document.getElementById('search-input');
let afterSearch = document.querySelector('.user-navigation__entrance .footer-item');
let body = document.body;

// let productArticle = document.querySelectorAll('.product__article .product__img-container');
// let productArticleImg = document.querySelectorAll('.product__img-new');

if(popupFeedback) {

	const openFeedback = () => {
		popupFeedback.classList.remove('popup-none');
		document.body.classList.add('hidden-overflow');
		if(window.getComputedStyle(popupFeedback, null).display == 'flex') { // закрывать форму если нажимается вне карты
			document.addEventListener('click', e => {
				let target = e.target;
				let its_popupFeedbackForm = target == popupFeedbackForm || popupFeedbackForm.contains(target);
				let its_linkWriteUs = target == document.querySelector('.link-write-us');
				if (!its_popupFeedbackForm && !its_linkWriteUs) {
					closeFeedback();	
				}
			});
		};
	};

	const closeFeedback = () => {
		popupFeedback.classList.add('popup-none');
		document.body.classList.remove('hidden-overflow');
	};

	document.querySelector('.link-write-us').addEventListener('click', e => { // открытие формы
		e.preventDefault();
		openFeedback();
	});

	document.querySelector('.write-us .popup__close').onclick = () => { // закрытие формы
		closeFeedback();
	};

	document.addEventListener("keydown", e => { // закрытие формы через ESC
		if(e.key === 'Escape') {
			closeFeedback();
		} 
	});

	document.querySelector('.write-us__btn').onclick = () => { // проверка на валидность
		let name = document.getElementById('write-us__username');
		let email = document.getElementById('write-us__email');
		let text = document.getElementById('write-us__textarea');
		if (!name.checkValidity()) {
			name.classList.add('invalid');
			popupFeedback.classList.add('feedback-alert');
			setTimeout(function () {
				popupFeedback.classList.remove('feedback-alert');
			},500);
		} else if (!email.checkValidity()) {
			email.classList.add('invalid');
			popupFeedback.classList.add('feedback-alert');
			setTimeout(function () {
				popupFeedback.classList.remove('feedback-alert');
			},500);
		} else if (!text.checkValidity()) {
			text.classList.add('invalid');
			popupFeedback.classList.add('feedback-alert');
			setTimeout(function () {
				popupFeedback.classList.remove('feedback-alert');
			},500);
		}
	};
	
}

if(popupMap) {

	const openMap = () => {
		popupMap.classList.remove('popup-none');
		document.body.classList.add('hidden-overflow');
		if(window.getComputedStyle(popupMap, null).display == 'flex') { // закрывать карту если нажимается вне карты
			document.onclick = e => {
				let target = e.target;
				let its_popupMapContainer = target == popupMapContainer || popupMapContainer.contains(target);
				let its_linkMap = target == linkMap;
				if (!its_popupMapContainer && !its_linkMap) {
					closeMap();	
				}
			};
		};
	};

	const closeMap = () => {
		popupMap.classList.add('popup-none');
		document.body.classList.remove('hidden-overflow');
	};

	document.querySelector('.link-map').onclick = e => { // открытие карты
		e.preventDefault();
		openMap();
	};

	document.querySelector('.popup__map .popup__close').onclick = () => { // закрытие карты
		closeMap();
	};

	document.addEventListener("keydown", e => { // закрывать карту через ESC
		if(e.key === 'Escape') {
			closeMap();
		} 
	});
}

if(search) {
	search.onfocus = () => { // подчёркивает input search при фокусе на кнопке «Найти»
		searchInput.classList.add('search-border');
	};
	search.onblur = () => { // убирает подчёркивание input search при потери фокуса с кнопки «Найти»
		searchInput.classList.remove('search-border');
	};
}

// if(productArticleImg) { // добавление aria-label через поиск элемента
// 	let i = 0;
// 	let j = productArticleImg.length;
// 	while (i < j) {
// 		productArticleImg[i].querySelector('img').setAttribute('aria-label', 'Новый товар');
// 		i++
// 	}
// }

// if(productArticle) { // добавление aria-label через поиск наличия псевдокласса у элемента
// 	let i = 0;
// 	let j = productArticle.length;
// 	while (i < j) {
// 		let content = window.getComputedStyle(productArticle[i], ':before').content;
// 		if(content[1] == 'n' && content[2] == 'e' && content[3] == 'w') { // т.к. content является массивом из пяти элементов: [",n,e,w,"]
// 			productArticle[i].querySelector('img').setAttribute('aria-label', 'Новый товар');
// 		}
// 		i++;
// 	}
// }