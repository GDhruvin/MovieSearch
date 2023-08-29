import React, { useEffect, useState } from "react";


function Video(props) {

    const [val , setval] = useState(false);

    const mousein = () =>{
        setval(true)
    }

    const mouseout = () => {
        setval(false)
    }

    useEffect(()=> {

    },[])
    return (
        <div className="container" onMouseEnter={mousein}  onMouseLeave={mouseout}>
            {val ?<video loop muted autoPlay width='290' height="350" controls >
                <source src="./video.mp4" type="video/mp4" />
            </video> : <img className="card-img-top" src={props.moviimg} alt="Card image cap" />}
        </div>
    );
}

export default Video;