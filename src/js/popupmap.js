
if(popupMap) {

	const openMap = () => {
		popupMap.classList.remove('popup--none');
		document.body.classList.add('hidden-overflow');
		if(window.getComputedStyle(popupMap, null).display == 'flex') { // закрывать карту если нажимается вне карты
			document.addEventListener('click', e => {
				let target = e.target;
				let its_popupMapContainer = target == popupMapContainer || popupMapContainer.contains(target);
				let its_linkMap = target == linkMap;
				if (!its_popupMapContainer && !its_linkMap) {
					closeMap();	
				}
			});
		};
	};

	const closeMap = () => {
		popupMap.classList.add('popup--none');
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