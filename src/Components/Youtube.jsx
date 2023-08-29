
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Moviecard1 from "./Moviecard1";

function Youtube(props) {

	const [search, setSearch] = useState('iron+man')
	const [movie, setmovie] = useState()



	useEffect(() => {
		setSearch(props.sendData)
		fetchmovie()
	},[props.sendData])

	const fetchmovie = async () => {
      
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=95ac473e2ad8432c57596d8957973bba`)
        setmovie(res.data.results)
    }
	

	return (
		<div className="row">
			{
                movie !== undefined && movie.map((m,i) => <Moviecard1 movie={m} key={i} />)
            }
		</div>
	);
}

export default Youtube;