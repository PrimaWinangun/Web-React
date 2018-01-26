import React, {Component} from 'react';
import Routes from '../routes';

import ReadProductComponent from './product/product.component.js';
import CreateProductComponent from './product/create.component.js';
import DeleteProductComponent from './product/delete.product.componenet.js';

function changeAppMode(newMode, productId){
		this.setState({
		  currentMode: newMode
		});
		if(productId !== undefined){
			this.setState({productId: productId});
		}
	}
	
class MainApp extends Component {
	constructor(){
		super();
		this.state={products:[], currentMode:'read'};
	}
	
	
	render() {
		return(
			<Routes/>
		);
	}
}

export default MainApp;


