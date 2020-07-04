const popupFeedback = document.querySelector('.popup__write-us');
const popupFeedbackOpen = document.querySelector('.link-write-us');
const popupFeedbackForm = document.querySelector('.popup__write-us .write-us');
const name = document.getElementById('write-us__username');
const email = document.getElementById('write-us__email');
const text = document.getElementById('write-us__textarea');
const popupFeedbackSubmit = document.querySelector('.write-us__btn');
const popupFeedbackClose = document.querySelector('.write-us .popup__close');
const popupMap = document.querySelector('.popup__map');
const popupMapContainer = document.querySelector('.popup__map .popup__map-container');
const linkMap = document.querySelector('.link-map');
const search = document.querySelector('.search__btn');
const searchInput = document.getElementById('search-input');
const afterSearch = document.querySelector('.user-navigation__entrance .footer-item');
const productArticleImg = document.querySelectorAll('.product__img-new');

if(popupFeedback) {

	const openFeedback = () => {
		popupFeedback.classList.remove('popup-none');
		document.body.classList.add('hidden-overflow');
		if(window.getComputedStyle(popupFeedback, null).display == 'flex') { // закрывать форму если нажимается вне карты
			document.addEventListener('click', e => {
				let target = e.target;
				let its_popupFeedbackForm = target == popupFeedbackForm || popupFeedbackForm.contains(target);
				let its_linkWriteUs = target == popupFeedbackOpen;
				if (!its_popupFeedbackForm && !its_linkWriteUs) {
					closeFeedback();	
				}
			});
		};
		if(window.localStorage) { // вводит в input name и email значения из локального хранилища
			name.value = localStorage.getItem("name");
			email.value = localStorage.getItem("email");
		}
	};

	const closeFeedback = () => {
		popupFeedback.classList.add('popup-none');
		document.body.classList.remove('hidden-overflow');
		name.classList.remove('invalid');
		email.classList.remove('invalid');
		text.classList.remove('invalid');
	};
	
	popupFeedbackOpen.addEventListener('click', e => { // открытие формы
		e.preventDefault();
		openFeedback();
	});

	popupFeedbackClose.onclick = () => { // закрытие формы
		closeFeedback();
	};

	document.addEventListener("keydown", e => { // закрытие формы через ESC
		if(e.key === 'Escape') {
			closeFeedback();
		} 
	});

	popupFeedbackSubmit.onclick = () => { // проверка на валидность
		if (!name.checkValidity()) {
			name.classList.add('invalid');
			popupFeedback.classList.add('feedback-alert');
			setTimeout(() => {
				popupFeedback.classList.remove('feedback-alert');
			}, 500);
		} else if (!email.checkValidity()) {
			email.classList.add('invalid');
			popupFeedback.classList.add('feedback-alert');
			setTimeout(() => {
				popupFeedback.classList.remove('feedback-alert');
			}, 500);
		} else if (!text.checkValidity()) {
			text.classList.add('invalid');
			popupFeedback.classList.add('feedback-alert');
			setTimeout(() => {
				popupFeedback.classList.remove('feedback-alert');
			}, 500);
			localStorage.setItem("name", name.value);
			localStorage.setItem("email", email.value);
		} else {
			localStorage.setItem("name", name.value);
			localStorage.setItem("email", email.value);
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

if(productArticleImg) { // добавление нового alt через поиск элемента
	let i = 0;
	let j = productArticleImg.length;
	while (i < j) {
 		let altArray = [productArticleImg[i].querySelector('img').getAttribute('alt').split(' ', 1).toString(),'нового товара',productArticleImg[i].querySelector('img').getAttribute('alt').split(' ').slice(1).join(' ')]
			productArticleImg[i].querySelector('img').setAttribute('alt', altArray.join(' '));
		i++
	}
}