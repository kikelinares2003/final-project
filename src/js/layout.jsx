import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Home } from "./views/home.jsx";
import { Products } from "./views/product.jsx";
import { ProductList } from "./views/product-list.jsx";
import { ByCategory } from "./views/by-category.jsx";
import { Cart } from "./views/cart.jsx";
import { Videos } from "./views/videos.jsx";
import { Blog } from "./views/blog.jsx";
import { Product } from "./views/product.jsx";
import { Footer } from "./component/footer.jsx";
import { Login } from "./views/login.jsx";
import { CheckOut } from "./views/check-out.jsx";
import { ProfilePage } from "./views/profile-page.jsx";

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
						<Route path="/product/:theid" component={Product} />
						<Route path="/product-list" component={ProductList} />
						<Route
							path="/by-category/:category"
							component={ByCategory}
						/>
						<Route exact path="/cart" component={Cart} />
						<Route path="/check-out" component={CheckOut} />
						<Route path="/blog" component={Blog} />
						<Route path="/login" component={Login} />
						<Route path="/profile-page" component={ProfilePage} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
