import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slice/authSlice'

const TopToolbar = ({ search, handleChange }) => {
	const dispatch = useDispatch()
	return (		
		<div className="row justify-content-between bg-dark p-3">
			<input
				className="mb-2 col-xs-12 mb-md-0 col-md-4 p-2"
				type="text" 
				placeholder="Search"
				value={search}
				onChange={handleChange}
			/>
      <button 
				className="btn btn-warning col-xs-12 col-md-3 col-lg-1" 
				onClick={() => dispatch(logout())}
			>
        Logout
      </button>
		</div>
	);
}

export default TopToolbar;