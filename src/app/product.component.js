import React, {Component} from 'react';

	function getInitialState(){
		return {products:[]};
	};
	
	function componentDidMount(){
		 this.serverRequest = $.get("http://localhost/api/product/read.php", function (products) {
            this.setState({
                products: products.records
            });
        }.bind(this));
	};
	
class ReadProductComponent extends Component{
	render(){
		var filteredProducts = this.state.products;
		$('.page-header h1').text('Read Products');
		
		return (
			<div className='overflow-hidden'>
				<TopActionsComponent changeAppMode={this.props.changeAppMode} />
                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
		);
	}
}

export default ReadProductComponent;