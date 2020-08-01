if(productArticleImg) { // добавление нового alt через поиск элемента
	let i = 0;
	let j = productArticleImg.length;
	while (i < j) {
 		let altArray = [productArticleImg[i].querySelector('img').getAttribute('alt').split(' ', 1).toString(),'нового товара',productArticleImg[i].querySelector('img').getAttribute('alt').split(' ').slice(1).join(' ')]
			productArticleImg[i].querySelector('img').setAttribute('alt', altArray.join(' '));
		i++
	}
}