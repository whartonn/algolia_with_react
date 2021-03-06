import React from 'react';

class Pagination extends React.Component {

	render(){
		const next_page = this.props.pagination.next_page;

		if(!next_page){ return <div id="pagination"/>;} 
		return (
			<div id="pagination">
				<ul>
					<li>
						<a 	href="#" 
							className="go-to-page" 
							onClick={()=> this.props.goToNextPage(next_page)}>
							Show More
						</a>
					</li>
				</ul>
			</div>	
		);
	}
}

Pagination.propTypes = {
	pagination: React.PropTypes.shape({
		next_page: React.PropTypes.number.isRequired
	}),
	goToNextPage: React.PropTypes.func.isRequired
};

export default Pagination;