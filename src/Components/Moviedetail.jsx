
import React, {  useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Moviedetail(props) {

    const {id} = useParams();

    const [moviedt ,setmoviedt] = useState([])
    useEffect(()=>{
   
        fetch({id})

    },[])

    const fetch = async (imdbid) => {
      
        const res = await axios.get(`https://www.omdbapi.com/&i=${imdbid}?apikey=83980898`)
        console.log("moviedetail"+res.data.Imdbid);
        setmoviedt(JSON.stringify(res.data))
    }
    

    return (
        <div className="row">
            <div className="col-md-4">
            <img className="card-img-top" src={moviedt.Poster} alt="Card image cap" />
            </div>
            <div className="col-md-8">{moviedt.Title}</div>
        </div>
    );
}

export default Moviedetail;