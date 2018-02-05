var filteredProducts = this.props.products;
		console.log(this.products);
		$('.page-header h1').text('Read Products');
		
		return (
			<div className='overflow-hidden'>
				<TopActionsComponent/>
                <ProductsTable products={filteredProducts}/>
            </div>
		);