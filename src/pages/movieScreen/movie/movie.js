import React from 'react';
import { Link } from 'react-router-dom'

const Movie = (props) => {
	return(
		<div className="col-sm-3">
			<div className="card m-4 bg-dark">
				<img className="card-image-top" src={props.image} alt={props.title}/>
				<div className="card-body text-white">						
					<Link to={"/movies/" + props.id}>
						<p className="card-text">
							{props.title}
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Movie;