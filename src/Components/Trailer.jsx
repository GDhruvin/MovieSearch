
import React from "react";
import './Trailer.css';

function Trailer({movie}) {


	const nullvalue = movie[0];


	return (
		<div className="container" >
			<div className="video-responsive">
				{
					
				}
				<iframe
					width="853"
					height="480"
					src={`https://www.youtube.com/embed/${props.movie.key}`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Embedded youtube"
				/>				
			</div>
		</div>
	);
}

export default Trailer;