import React, {Component} from 'react';
import Routes from '../routes';

class MainApp extends Component {
	constructor(){
		super();
		this.state={products:[], currentMode:'read'};
	}
	
	changeAppMode = (newMode, productId) => {
		this.setState({
		  currentMode: newMode
		});
		if(productId !== undefined){
			this.setState({productId: productId});
		}
	}
	
	render() {
		return(
		<Routes/>
		//var modeComponent = <ReadProductComponent changeAppMode={this.changeAppMode} />;
		// switch(this.props.currentMode){
			// case 'read':
				// return {modeComponent};
			// case 'readOne':
				// return <ReadProductComponent productId={this.props.productId} changeAppMode={this.changeAppMode}/>;
			 // case 'create':
				// return <CreateProductComponent changeAppMode={this.changeAppMode}/>;
			// case 'update':
				// modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
				// break;
			// case 'delete':
				// modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
				// break;
			// default:
				// break;
		// }
		// return modeComponent;
		);
	}
}

export default MainApp;


