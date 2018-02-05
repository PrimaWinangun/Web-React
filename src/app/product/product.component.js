import React, {Component} from 'react';
import TopActionsComponent from './topaction.component.js';
import ProductsTable from './product_table.component.js';
	
class ReadProductComponent extends Component{
	constructor(){
		super();
		this.state={products:[],};
	}
	
	componentDidMount(){
		var url = 'http://localhost/api/product/read.php';
		fetch(url)
		.then(function(response){
			return response.json();
		})
		.then((json) => {
			this.setState({
				products: json.records
			})
		})
	}
	
	render(){	
		var filteredProducts = this.state.products;
		
		return(
			<div className='overflow-hidden'>
                <TopActionsComponent  />
 
                <ProductsTable
                    products={filteredProducts}
                    />
            </div>
		)
	}
}


				

export default ReadProductComponent;