import React, {Component} from 'react'

class DeleteProductComponent extends Component{
	onDelete(e){
		var productId = this.props.productId;
		
		var url = 'http://localhost/api/product/delete.php';
		console.log(productId);
		fetch(url,{
			method: "POST",
			contentType: 'application/json',
			data : JSON.stringify(productId),
		}).then(function(response) { 
			return response.json();
		}).then((response) => {
			this.props.changeAppMode('read');
		}).then(response => console.log(response));
	}
	
	render(){
		return (
			<div className='row'>
				<div className='col-md-3'></div>
				<div className='col-md-6'>
					<div className='panel panel-default'>
						<div className='panel-body text-align-center'>Are you sure?</div>
						<div className='panel-footer clearfix'>
							<div className='text-align-center'>
								<button onClick={this.onDelete}
									className='btn btn-danger m-r-1em'>Yes</button>
								<button onClick={() => this.props.changeAppMode('read')}
									className='btn btn-primary'>No</button>
							</div>
						</div>
					</div>
				</div>
				<div className='col-md-3'></div>
			</div>
		);
	}
	
}

export default DeleteProductComponent;