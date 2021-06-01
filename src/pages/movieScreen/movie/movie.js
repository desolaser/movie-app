import React from 'react'
import { Link } from 'react-router-dom'

const Movie = (props) => {
	return (					
		<div className="col-sm-3">
			<Link to={"/movies/" + props.id}>
				<div className="card m-4 bg-dark">
					<img className="card-image-top" src={props.image} alt={props.title}/>
					<div className="card-body text-white">	
						<p className="card-text">
							{props.title}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Movie;