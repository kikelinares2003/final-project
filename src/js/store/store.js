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
					img:
						"https://react-router-kaceydawson.c9users.io/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img:
						"https://react-router-kaceydawson.c9users.io/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
				},
				{
					title: "BLOG 2",
					url: "https://react-router-kaceydawson.c9users.io/blog",
					img:
						"https://react-router-kaceydawson.c9users.io/resume.jpg",
					para:
						"Thank you for taking a minute to go over my resume. I have 15 years developing web pages and creating user interfaces. Please take a minute to go over my extensive web development and corporate experience."
				},
				{
					title: "PRODUCTS 2",
					url: "https://react-router-kaceydawson.c9users.io/product",
					img:
						"https://react-router-kaceydawson.c9users.io/cape_inView.jpg",
					para:
						"I also have extensive Photoshop and graphic design experience! Please visit my graphic examples page and check out my style. I created most of these for new and used auto dealers when I worked with Autotrader.com"
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

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
