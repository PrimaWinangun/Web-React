import React, {Component} from 'react';

class TopActionsComponent extends Component{

	render(){
		return(
			<div>
				<a href='/create'
					className='btn btn-primary margin-bottom-1em'> Create Product	
				</a>
			</div>
		);
	}
}

export default TopActionsComponent;