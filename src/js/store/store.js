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
			cartStore: [
				{
					productName: "Part number 1",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "25",
					productDescription: "Short description of item 1"
				},
				{
					productName: "Part number 2",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "100",
					productDescription: "Short description of item 2"
				},
				{
					productName: "Part number 3",
					productImage:
						"https://i.ytimg.com/vi/IwajDW59Z9M/maxresdefault.jpg",
					productPrice: "47.99",
					productDescription: "Short description of item 3"
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
