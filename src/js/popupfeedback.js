if(popupFeedback) {

	const openFeedback = () => {
		popupFeedback.classList.remove('popup--none');
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
		popupFeedback.classList.add('popup--none');
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
			popupFeedback.classList.add('write-us--alert');
			setTimeout(() => {
				popupFeedback.classList.remove('write-us--alert');
			}, 500);		
		} else {
			localStorage.setItem("name", name.value);
			localStorage.setItem("email", email.value);
		}
		if (!email.checkValidity()) {
			email.classList.add('invalid');
			popupFeedback.classList.add('write-us--alert');
			setTimeout(() => {
				popupFeedback.classList.remove('write-us--alert');
			}, 500);
			localStorage.setItem("name", name.value);
		} else {
			localStorage.setItem("name", name.value);
			localStorage.setItem("email", email.value);
		}
		if (!text.checkValidity()) {
			text.classList.add('invalid');
			popupFeedback.classList.add('write-us--alert');
			setTimeout(() => {
				popupFeedback.classList.remove('write-us--alert');
			}, 500);
			localStorage.setItem("email", email.value);
		}
	};

	name.oninput = () => {
		if(name.classList.contains('invalid')) {
			name.classList.remove('invalid');
		}
	}

	email.oninput = () => {
		if(email.classList.contains('invalid')) {
			email.classList.remove('invalid');
		}
	}

	text.oninput = () => {
		if(text.classList.contains('invalid')) {
			text.classList.remove('invalid');
		}
	}
	
}
