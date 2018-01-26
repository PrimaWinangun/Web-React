import React, {Component} from 'react';
import Routes from '../routes';

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


