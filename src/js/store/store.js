const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cartStore: [],
			products: [
				// {
				// 	ID: 1,
				// 	product_name: "Product 1",
				// 	price: 200,
				// 	image_1:
				// 		"https://appgrooves.com/cdn/mc/AUTO_AND_VEHICLES/1_w730.jpg"
				// }
			],
			specials: [],
			productCategories: [],
			session: {
				isLoggedIn: false,
				username: "user",
				password: "pass",
				token: ""
			}
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
			findProduct(prod) {
				const store = getStore();
				let index = -1;
				for (var i = 0; i < store.cartStore.length; i++) {
					if (store.cartStore[i].product.ID == prod.ID) {
						index = i;
					}
				}
				return index;
			},
			addToCart(prod) {
				const store = getStore();
				if (store.cartStore.length == 0) {
					store.cartStore.push({
						qty: 1,
						product: prod
					});
				} else if (
					store.cartStore.length > 0 &&
					this.findProduct(prod) >= 0
				) {
					store.cartStore[this.findProduct(prod)].qty =
						parseInt(store.cartStore[this.findProduct(prod)].qty) +
						1;
				} else {
					store.cartStore.push({
						qty: 1,
						product: prod
					});
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
					if (catName[i] != prod.meta_keys.category) {
						catName[i] = prod.meta_keys.category;
						return catName;
					}
					setStore({ productCategories: store.productCategories });
				}
			},
			handleSignOut(e) {
				const store = getStore();
				e.preventDefault();
				store.session = {
					isLoggedIn: false,
					username: "user",
					password: "pass",
					token: ""
				};
				store.cartStore = [];
				this.props.history.push("/login");
				setStore({ store: store });
			},
			registerUser(user, pass, email) {
				const endpoint =
					"https://word-press-project-kikelinares2003.c9users.io/wp-json/wp/v2/users/register";
				// fetch session

				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: pass,
						email: email
					})
						.then(res => {
							if (res.status !== 200) {
								console.log(
									"Connection Error, status " + res.status
								);
								return;
							}
							res.json().then(data => {
								let store = getStore();
								this.login(
									data.username,
									data.password,
									this.process
								);
							});
							this.process(this.store.session);
						})
						.catch(err => {
							alert("Fetch error: ", err);
						})
				});
			},
			login: (user, pass, process) => {
				const endpoint =
					"https://word-press-project-kikelinares2003.c9users.io/wp-json/jwt-auth/v1/token";
				// fetch session

				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: pass
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log(
								"Connection Error, status " + res.status
							);
							return;
						}
						res.json().then(data => {
							let store = getStore();
							store.session = data;
							store.session.isLoggedIn = true;
							setStore({
								store
							});
							process(store.session);
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},

			totalPrice: elem => {
				const store = getStore();
				let total = 0;
				for (var i = 0; i < elem.length; i++) {
					total =
						total + elem[i].product.meta_keys.price * elem[i].qty;
				}
				return total;
			},
			ItemsInCart() {
				const store = getStore();
				var total = 0;
				for (var i = 0; i < store.cartStore.length; i++) {
					total += parseInt(store.cartStore[i].qty);
				}
				//console.log(total);
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
