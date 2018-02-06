import React, {Component} from 'react';

class UpdateProduct extends Component{
	
	constructor(){
		super();
		this.state={
		products:[],
		categories: [],
		id: 0,
        name: '',
        description: '',
        price: 0,
        category_name: '',
        category_id: ''};
	}
	
	componentDidMount(){
		const { match: { params } } = this.props;
		var getProductUrl = 'http://localhost/api/product/read_one.php?id='+ params.productId;
		fetch(getProductUrl)
		.then(function(response){
			return response.json();
		})
		.then((json) => {
			this.setState({
				category_name: json.records.category_name,
				id: json.records.id,
				name: json.records.name,
				description: json.records.description,
				price: json.records.price,
				selectedCategoryId: json.records.category_id});
		})
		
		var getCategoryurl = 'http://localhost/api/category/read.php';
		fetch(getCategoryurl)
		.then(function(response){
			return response.json();
		})
		.then((json) => {
			this.setState({
				categories: json.records
			})
		})
	}
	
	onCategoryChange = (e) => {
		this.setState({selectedCategoryId: e.target.value});
	}
	
	onNameChange = (e) => {
		this.setState({name: e.target.value});
	}
	
	onDescriptionChange = (e) => {
		this.setState({description: e.target.value});
	}
	
	onPriceChange = (e) => {
		this.setState({price: e.target.value});
	}
	
	onSave = (e) =>{
		
		var form_data={
			id: this.state.id,
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			category_id : this.state.selectedCategoryId
		};
		var url = 'http://localhost/api/product/update.php';
		console.log(form_data);
		fetch(url,{
			method: "POST",
			contentType: 'application/json',
			body : JSON.stringify(form_data),
		}).then(function(response) { 
			return response.json();
		}).then((data) => {
			this.setState({
				successCreation: data['message']});
		}).then(data => console.log(data));
	}
	
	render(){
		var categoriesOptions = this.state.categories.map(function(category){
			return (
				<option key={category.id} value={category.id}>{category.name}</option>
			);
		});
		let spacing: 10;
		return (
			<div>
			
				{
		 
					this.state.successCreation === "Product was created." ?
						<div className='alert alert-success'>
							Product was saved.
						</div>
					: null
				}
		 
				{
		 
					this.state.successCreation === "Unable to create product." ?
						<div className='alert alert-danger'>
							Unable to save product. Please try again.
						</div>
					: null
				}
		 
				<a href='/read' style={{marginLeft: spacing + 'px'}}
					className='btn btn-primary margin-bottom-1em'> Read Products
				</a>
		 
				<form onSubmit={this.onSave}>
					<table className='table table-bordered table-hover'>
					<tbody>
						<tr>
							<td>Name</td>
							<td>
								<input
								type='text'
								className='form-control'
								value={this.state.name}
								required
								onChange={this.onNameChange} />
							</td>
						</tr>
		 
						<tr>
							<td>Description</td>
							<td>
								<textarea
								type='text'
								className='form-control'
								required
								value={this.state.description}
								onChange={this.onDescriptionChange}>
								</textarea>
							</td>
						</tr>
		 
						<tr>
							<td>Price ($)</td>
							<td>
								<input
								type='number'
								step="0.01"
								className='form-control'
								value={this.state.price}
								required
								onChange={this.onPriceChange}/>
							</td>
						</tr>
		 
						<tr>
							<td>Category</td>
							<td>
								<select
								onChange={this.onCategoryChange}
								className='form-control'
								value={this.state.selectedCategoryId}>
								<option value="-1">Select category...</option>
								{categoriesOptions}
								</select>
							</td>
						</tr>
		 
						<tr>
							<td></td>
							<td>
								<button
								className='btn btn-primary'
								>Update</button>
							</td>
						</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
	
}

export default UpdateProduct;