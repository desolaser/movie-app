import React from 'react'

const SearchBar = ({ input, handleChange }) => {
	return(		
		<div className="bg-dark p-3">
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