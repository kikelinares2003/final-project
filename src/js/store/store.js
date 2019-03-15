const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			sections: [
				{
					title: "BLOG",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img: "http://kaceydawson.com/img/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img: "http://kaceydawson.com/img/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				},
				{
					title: "BLOG",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img: "http://kaceydawson.com/img/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img: "http://kaceydawson.com/img/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				}
			],
			cartStore: [
				{
					productName: "Part number 1",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: 25,
					productDescription: "Short description of item 1",
					qty: 100
				},
				{
					productName: "Part number 2",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "100",
					productDescription: "Short description of item 2",
					qty: 1
				},
				{
					productName: "Part number 3",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "47.99",
					productDescription: "Short description of item 3",
					qty: 1
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},

			setQty: (val, i) => {
				const store = getStore();
				store.cartStore[i].qty = val.target.value;
				setStore({ cartStore: store.cartStore });
			},
			totalPrice: elem => {
				const store = getStore();
				let total = 0;

				for (var i = 0; i < elem.length; i++) {
					total = total + elem[i].productPrice * elem[i].qty;
				}
				return total;
			},

			deleteSection: index => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const sections = store.sections.map((v, i) => {
				// 	if (i === index) {
				// 		//delete sections[i];
				// 		sections[i].remove();
				// 		return sections;
				// 	}
				// });

				store.sections.splice(index, 1);

				//console.log(sections);
				//reset the global store
				setStore({ store: store });
			}
			//reset the global store
		}
	};
};

export default getState;
