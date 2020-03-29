import React from 'react';

const SearchBar = (props) => {
	return(		
		<div className="search-bar p-2">
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