import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Read from './app/product/product.component';
import Read_one from './app/product/detail.component';
import Create from './app/product/create.component';
import deleteProd from './app/product/delete.product.componenet';

const Routes = () => (
	<BrowserRouter >
		<Switch>
			<Route exact path="/" component={Read}/>
			<Route path="/read" component={Read}/>
			<Route path="/product_detail/:productId" component={Read_one}/>
			<Route path="/create" component={Create}/>
			<Route path="/product_delete:productId" component={deleteProd}/>
		</Switch>
	</BrowserRouter>
);

export default Routes;