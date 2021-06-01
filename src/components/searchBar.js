import React from 'react'

const SearchBar = ({ input, handleChange }) => {
	return(		
		<div className="bg-dark">
			<input 
				type="text" 
				placeholder="Search"
				value={input}
				onChange={handleChange}
			/>
		</div>
	);
}

export default SearchBar;