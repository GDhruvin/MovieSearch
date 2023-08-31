import React, { useState, useEffect } from "react";
import axios from "axios";
import Trailer from "./Trailer";


function Moviecard1({ movie }) {

    var id = movie.id
    const [moviedata, setmoviedata] = useState([])

    useEffect(() => {
        fetchvideo(id)
    }, [id])

    const fetchvideo = async (id) => {

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=95ac473e2ad8432c57596d8957973bba`)
        setmoviedata(res.data.results)
    }

    const [val , setval] = useState(false);

    const mousein = () =>{
        setval(true)
    }

    const mouseout = () => {
        setval(false)
    }

    


    return (
        <>
            <div className="col-md-4" >
                <div className="card card1" onMouseEnter={mousein}  onMouseLeave={mouseout}>
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <p className="card-text">release on {movie.release_date}</p>
                    </div>
                    {
                        val ?  <Trailer movie={moviedata}/>  : <img className="card-img-top" src={"https://image.tmdb.org/t/p/original" + movie.poster_path} width={'100px'} height={'300px'} alt="Card image cap"/>
                    }
                </div>
            </div>
        </>
    );
}

export default Moviecard1;