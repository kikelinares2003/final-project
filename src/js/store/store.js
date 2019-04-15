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

			getAllCategories: prod => {
				const store = getStore();
				const catName = [];
				for (var i = 0; i <= prod.length; i++) {
					if (catName[i] != prod.cat) {
						catName[i] = prod.cat;
						return catName;
					}
				}
				console.log(catName());
			}

			// login: (user, pass) => {
			// 	const endpoint = "";
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
