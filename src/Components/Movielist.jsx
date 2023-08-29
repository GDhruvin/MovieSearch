
import React, {useEffect, useState } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";

function Movielist(props) {


    const [movies, setmovies] = useState([])
    const [search, setSearch] = useState()

    useEffect(()=>{
        
        setSearch(props.sendData)
        fetch(search)

    },[props.sendData])

    const fetch = async (search) => {
      
        const res = await axios.get(`https://www.omdbapi.com/?apikey=83980898&s=${search}`)
        setmovies(res.data.Search)
    }

    return (
        <div className="row">
            {
                movies !== undefined && movies.map((m) => <Moviecard movie={m} key={m.imdbID} />)
            }
        </div>
    );
}

export default Movielist;


