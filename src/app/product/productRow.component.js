import React, {Component} from 'react';

class ProductRow extends Component{
	constructor(){
		super();
		this.state = {
			selectedProduct: ''
		}
	}
	
	render() {
		var selectedProduct = '/product_detail/'+this.props.product.id;
		var deleteProduct = '/product_delete/'+this.props.product.id;
		var editProduct = '/product_update/'+this.props.product.id;
		return (
        <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            <td>{this.props.product.category_name}</td>
            <td>
                <a href={selectedProduct}
                    className='btn btn-info m-r-1em'> Read One
                </a>
                <a href={editProduct}
                    className='btn btn-primary m-r-1em'> Edit
                </a>
                <a href={deleteProduct}
                    className='btn btn-warning m-r-1em'> Delete
                </a>
            </td>
        </tr>
        );
	}
}

export default ProductRow;