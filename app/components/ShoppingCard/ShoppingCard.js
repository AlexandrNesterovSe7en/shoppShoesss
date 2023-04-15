class ShoppingCard {
	handlerClear() {
		ROOT_SHOPPING.innerHTML = '';
		document.querySelector('body').style.cssText = 'overflow: scroll;'
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shopping-element__name">💵 ${name}</td>
						<td class="shopping-element__price">${price.toLocaleString()} USD</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});


		const html = `
			<div class="shopping-container">
				<div class="shopping__close" onclick="shoppingCardPage.handlerClear();"></div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shopping-element__name">💥 Сумма: </td>
						<td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
					</tr>					
				</table>
			</div>
		`;
		document.querySelector('body').style.cssText = 'overflow: hidden;'
		ROOT_SHOPPING.innerHTML = html;
	}
}

const shoppingCardPage = new ShoppingCard();

