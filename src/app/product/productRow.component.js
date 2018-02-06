import React, {Component} from 'react';
import ReactModal from 'react-modal';

class ProductRow extends Component{
	constructor(){
		super();
		this.state = {
			selectedProduct: '',
			showModal: false
		}
		
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}
	
	handleOpenModal () {
    this.setState({ showModal: true });
	}
	  
	handleCloseModal () {
		this.setState({ showModal: false });
	}
	
	deleteProduct(id){
		return(
			<div>success</div>
		)
	}
	
	
	render() {
		const padding = 90; // adjust this to your needs
		let height = (this.state.contentHeight + padding);
		let heightPx = height + 'px';
		let heightOffset = height / 2;
		let offsetPx = heightOffset + 'px';
		const style = {
		  
		};
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
				<button onClick={this.handleOpenModal} className='btn btn-warning m-r-1em'>Delete</button>
				<ReactModal 
					isOpen={this.state.showModal}
					contentLabel="onRequestClose Example"
					style={{
						overlay: {
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(255, 255, 255, 0.75)'
					  },
					  content: {
						border: '1px solid #ccc',
						borderRadius: '4px',
						bottom: 'auto',
						height: heightPx,  // set height
						left: '30%',
						padding: '2rem',
						position: 'fixed',
						right: 'auto',
						top: '30%', // start from center
						transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
						width: '40%',
						maxWidth: '40rem'
					  }
					}}
				>
				  <p>Anda Yakin ingin menghapus item '{this.props.product.name}'</p>
				  <button onClick={this.deleteProduct(this.props.product.id)} className='btn btn-warning'>Yakin</button>
				  <button onClick={this.handleCloseModal} className='btn btn-warning m-r-1em'>Batal</button>
				</ReactModal>
            </td>
        </tr>
        );
	}
}

export default ProductRow;