import React from 'react';

const Movie = (props) => {
	return(
		<div className="col-sm-3">
			<div className="card m-4">
				<img className="card-image-top" src={props.img} alt={props.name}/>
				<div className="card-body">
					<p className="card-text">
						{props.name}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Movie;