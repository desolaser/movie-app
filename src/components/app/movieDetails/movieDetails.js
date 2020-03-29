import React from 'react';

const MovieDetails = (props) => {	
    const apiKey = "fb8e05f07af673dda52762e34085ea92"

	return(		
		<div class="container-fluid min-vh-100">
            <div class="row min-vh-100 justify-content-center align-items-center">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<img src="https://image.tmdb.org/t/p/w300/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg" alt="" />						
				</div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 bg-white ">
					<p>Overview</p>
                </div>
            </div>
        </div>
	);
}

export default MovieDetails;