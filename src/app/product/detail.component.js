import React, {Component} from 'react';

class ReadDetail extends Component{
	constructor(){
		super();
		this.state={products:[],
		id: 0,
        name: '',
        description: '',
        price: 0,
        category_name: ''};
	}
	
	componentDidMount(){
		const { match: { params } } = this.props;
		var url = 'http://localhost/api/product/read_one.php?id='+ params.productId;
		console.log(params.productId);
		console.log(url);
		fetch(url)
		.then(function(response){
			return response.json();
		})
		.then((json) => {
			this.setState({category_name: json.records.category_name});
            this.setState({id: json.records.id});
            this.setState({name: json.records.name});
            this.setState({description: json.records.description});
            this.setState({price: json.records.price});
		})
	}	
	
	render(){
		return(
		<div>
			<a href='/read'
					className='btn btn-primary margin-bottom-1em'> Product List	
				</a>
			<table className='table table-bordered table-hover'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{this.state.name}</td>
                    </tr>
 
                    <tr>
                        <td>Description</td>
                        <td>{this.state.description}</td>
                    </tr>
 
                    <tr>
                        <td>Price ($)</td>
                        <td>${parseFloat(this.state.price).toFixed(2)}</td>
                    </tr>
 
                    <tr>
                        <td>Category</td>
                        <td>{this.state.category_name}</td>
                    </tr>
 
                </tbody>
            </table>
		</div>
		);
	}
	
}	
export default ReadDetail;