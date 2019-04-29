import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here
			{
				fetch(
					"https://word-press-project-kikelinares2003.c9users.io/wp-json/sample_api/v1/product"
				)
					.then(response => {
						if (response.status !== 200) {
							alert(
								"Connection error, status " + response.status
							);
							return;
						}

						response.json().then(data => {
							let store = this.state.store;
							store.products = data;

							store.specials = data.filter(prod => {
								if (prod.meta_keys.is_special == 1) return prod;
								if (prod.meta_keys.is_special == true)
									return prod;
							});

							// store.categories = data.filter(prod => {
							// 	if (prod.acf.is_special == true) return prod;
							// });

							this.setState({ store });
							// console.log(
							// 	data.posts[1].attachments[2].images.thumbnail
							// );
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			}
		} // ends componentDidMount()

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
