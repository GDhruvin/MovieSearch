import React, { useState } from "react";

const st = { width: '300px' }

function Movietrailer({ movie }) {

    const [val, setval] = useState(false)

    const getdetail = (imdbid) => {
        setval(!val)
    }

    return (
        <>
            <div className="col-md-4">
                <div className="card" style={st} >
                    <img className="card-img-top" src={"https://image.tmdb.org/t/p/original"+movie.poster_path} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <p className="card-text">release on {movie.release_date}</p>
                        <p className="card-text">{movie.imdbID}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movietrailer;