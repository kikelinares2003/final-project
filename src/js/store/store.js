const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cartStore: [],
			products: [],
			specials: []
		},
		actions: {
			getProductbyId: (prod, id) => {
				const store = getStore();
				for (var i = 0; i <= prod.length; i++) {
					if (prod[i] === id) {
						return prod[i];
					}
				}
			}

			// isSpecial: (prod, i) => {
			// 	//get the store
			// 	const store = getStore();
			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const specials = store.products.filter(
			// 		prod => prod.is - special == 1
			// 	);
			// 	setStore({ demo: demo });
			// }
			// setQty: (val, i) => {
			// 	const store = getStore();
			// 	store.cartStore[i].qty = val.target.value;
			// 	setStore({ cartStore: store.cartStore });
			// },
			// totalPrice: elem => {
			// 	const store = getStore();
			// 	let total = 0;
			// 	for (var i = 0; i < elem.length; i++) {
			// 		total = total + elem[i].productPrice * elem[i].qty;
			// 	}
			// 	return total;
			// },
			// deleteSection: index => {
			// 	//get the store
			// 	const store = getStore();
			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const sections = store.sections.map((v, i) => {
			// 		if (i === index) {
			// 			//delete sections[i];
			// 			sections[i].remove();
			// 			return sections;
			// 		}
			// 	});
			// 	store.sections.splice(index, 1);
			// 	//console.log(sections);
			// 	//reset the global store
			// 	setStore({ store: store });
			// }
			//reset the global store
		}
	};
};

export default getState;
