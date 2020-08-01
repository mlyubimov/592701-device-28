if(search) {
	search.onfocus = () => { // подчёркивает input search при фокусе на кнопке «Найти»
		searchInput.classList.add('search-border');
	};
	search.onblur = () => { // убирает подчёркивание input search при потери фокуса с кнопки «Найти»
		searchInput.classList.remove('search-border');
	};
}