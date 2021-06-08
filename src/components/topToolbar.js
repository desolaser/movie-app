import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slice/authSlice'

const TopToolbar = ({ search, handleChange, handleSearch }) => {
	const dispatch = useDispatch()
	return (		
		<div className="row justify-content-between bg-dark p-3">
			<div className="mb-2 col-xs-12 mb-md-0 col-md-6 col-lg-4">
				<input
					className="p-2 col-xs-12 col-md-8"
					type="text" 
					placeholder="Search"
					value={search}
					onChange={handleChange}
				/>
				<button
					className="btn btn-primary p-2 col-xs-12 col-md-4" 
					onClick={handleSearch}
				>
					Search
				</button>
			</div>
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