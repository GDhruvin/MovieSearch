import React, { useState } from "react";
import Video from "./Video";

const st = { width: '300px' }

function Moviecard({ movie }) {

    return (
        <>
            <div className="col-md-4">
                <div className="card" style={st} >
                    <Video moviimg={movie.Poster}/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">{movie.Year}</p>
                        <p className="card-text">{movie.imdbID}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Moviecard;