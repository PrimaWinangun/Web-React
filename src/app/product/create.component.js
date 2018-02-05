import React, {Component} from 'react';

class CreateProductComponent extends Component{
	constructor(){
		super();
		this.state={
			categories: [],
			selectedCategoryId: -1,
			name: '',
			description: '',
			successCreation: null,
		};
	}
	
	componentDidMount(){
		var url = 'http://localhost/api/category/read.php';
		fetch(url)
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
			name: this.state.name,
			description: this.state.description,
			price: this.state.price,
			category_id : this.state.selectedCategoryId
		};
		var url = 'http://localhost/api/product/create.php';
		console.log(form_data);
		fetch(url,{
			method: "POST",
			contentType: 'application/json',
			body : JSON.stringify(form_data),
		}).then(function(response) { 
			return response.json();
		}).then((data) => {
			this.setState({successCreation: data['message']});
			this.setState({name: ""});
			this.setState({description: ""});
			this.setState({price: ""});
			this.setState({selectedCategoryId: -1});
		}).then(data => console.log(data));
	}
	
	renderTopAction() {
		return(
			<div>
				<a href='/read'
					className='btn btn-primary margin-bottom-1em'> Product List	
				</a>
			</div>
		);
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
								>Save</button>
							</td>
						</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

export default CreateProductComponent;