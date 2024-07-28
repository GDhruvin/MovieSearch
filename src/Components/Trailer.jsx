
import React from "react";


function Trailer({ movie }) {


	const nullvalue = movie[0];


	return (
		<div className="container" >
			<div className="video-responsive">
				{
					nullvalue === undefined ? <div className="trailernot"><h3> trailer not found</h3></div> : <iframe
						width="853"
						height="480"
						src={`https://www.youtube.com/embed/${nullvalue.key}?rel=0&autoplay=1&mute=1;`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="trailer"
						title="Embedded youtube"
					/>
				}

			</div>
		</div>
	);
}

export default Trailer;