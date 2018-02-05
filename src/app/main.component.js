import React, {Component} from 'react';
import Routes from '../routes';

	
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


