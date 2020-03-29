import React from 'react';

const Movie = (props) => {
	return(
		<div className="col-sm-3">
			<div className="card m-4">
				<img className="card-image-top" src={props.image} alt={props.title}/>
				<div className="card-body">
					<p className="card-text">
						{props.title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Movie;