const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cartStore: [],
			products: [],
			specials: [],
			productCategories: []
			// session: {
			// 	loggenIn: false,
			// 	user_display_name: "https://my-wp-proj-kaceydawson.c9users.io/wp-json/jwt-auth/v1/token";

			// 	fetch(endpoint, {
			// 		method: "POST",
			// 		headers: {
			// 			"Content-Type"
			// 		}
			// 	})
			// }
		},
		actions: {
			getProductbyId: (prod, id) => {
				const store = getStore();
				for (var i = 0; i <= prod.length; i++) {
					if (prod[i] === id) {
						return prod[i];
					}
				}
			},
			addToCart(prod) {
				const store = getStore();
				//let qty = 1;

				if (store.cartStore.length == 0) {
					store.cartStore.push({
						qty: 1,
						product: prod
					});
				} else {
					for (var i = 0; i <= store.cartStore.length; i++) {
						if (store.cartStore[i].product.ID == prod.ID) {
							store.cartStore[i].qty += 1;
						} else {
							store.cartStore.push({
								qty: 1,
								product: prod
							});
						}
						break;
					}
				}
				setStore({ cartStore: store.cartStore });
			},

			deleteFromCart(index) {
				const store = getStore();
				let ID = "";
				let product = store.cartStore.filter((item, index) => {
					if (item.ID !== ID) {
						return item;
					}
					//console.log(item);
					setStore({ cartStore: product });
				});

				store.cartStore.splice(index, 1);
				setStore({ cartStore: store.cartStore });
			},

			setQty: (val, i) => {
				const store = getStore();
				store.cartStore[i].qty = val.target.value;
				setStore({ cartStore: store.cartStore });
			},
			getAllCategories: prod => {
				const store = getStore();
				const catName = [];
				for (var i = 0; i <= prod.length; i++) {
					if (catName[i] != prod.cat) {
						catName[i] = prod.cat;
						return catName;
					}
					setStore({ productCategories: store.productCategories });
				}
			},

			// login: (user, pass) => {
			// 	const endpoint = "";
			// }

			totalPrice: elem => {
				const store = getStore();
				let total = 0;
				for (var i = 0; i < elem.length; i++) {
					total = total + elem[i].product.acf.price * elem[i].qty;
				}
				return total;
			},
			ItemsInCart() {
				const store = getStore();
				var total = 0;
				for (var i = 0; i < store.cartStore.length; i++) {
					total += store.cartStore[i].qty;
				}
				return total;
			}
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
