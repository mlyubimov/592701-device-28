let popupFeedback = document.querySelector('.popup__write-us');
let popupMap = document.querySelector('.popup__map');
let siteMap = document.querySelector('.link-map img');
let linkMap = document.querySelector('.link-map');
let search = document.querySelector('.search__btn');
let searchInput = document.getElementById('search-input');
let afterSearch = document.querySelector('.user-navigation__entrance .footer-item');

if(popupFeedback) {
	document.querySelector('.link-write-us').addEventListener('click', function (e) {
		e.preventDefault();
		popupFeedback.classList.remove('popup-none');
		document.body.classList.add('hidden-overflow');
	}, false);

	document.querySelector('.write-us .popup__close').addEventListener('click', function () {
		popupFeedback.classList.add('popup-none');
		document.body.classList.remove('hidden-overflow');
	});

	document.querySelector('.write-us__btn').addEventListener('click', function () {
		let name = document.getElementById('write-us__username');
		let email = document.getElementById('write-us__email');
		let text = document.getElementById('write-us__textarea');
		if (!name.checkValidity()) {
			name.classList.add('invalid');
		} else if (!email.checkValidity()) {
			email.classList.add('invalid');
		} else if (!text.checkValidity()) {
			text.classList.add('invalid');
		}
	});
}

if(linkMap) {
	linkMap.classList.add('link-map-js');
	siteMap.classList.add('link-map__pointer');
}

if(popupMap) {
	document.querySelector('.link-map').addEventListener('click', function (e) {
		e.preventDefault();
		popupMap.classList.remove('popup-none');
		document.body.classList.add('hidden-overflow');
	}, false);

	document.querySelector('.popup__map .popup__close').addEventListener('click', function () {
		popupMap.classList.add('popup-none');
		document.body.classList.remove('hidden-overflow');
	});
}

if(search) {
	search.addEventListener("focus", function() {
		console.log('1');
		searchInput.classList.add('search-border');
	})
	search.addEventListener("blur", function() {
		searchInput.classList.remove('search-border');
	})
}