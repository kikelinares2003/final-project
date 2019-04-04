import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Home } from "./views/home.jsx";
import { Products } from "./views/product-list.jsx";
import { Cart } from "./views/cart.jsx";
import { Videos } from "./views/videos.jsx";
import { Blog } from "./views/blog.jsx";
import { Footer } from "./component/footer.jsx";

import Store from "./store/appContext.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route path="/product-list" component={Products} />
						<Route exact path="/cart" component={Cart} />
						<Route path="/videos" component={Videos} />
						<Route path="/blog" component={Blog} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
