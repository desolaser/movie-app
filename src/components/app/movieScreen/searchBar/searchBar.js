import React from 'react';
import './searchBar.css'

const SearchBar = (props) => {
	return(		
		<div className="bg-dark p-3">
			<input 
				type="text" 
				placeholder="Search"
				value={props.input}
				onChange={props.handleChange}
			/>
		</div>
	);
}

export default SearchBar;