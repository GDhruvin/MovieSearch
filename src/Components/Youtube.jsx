import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Moviecard1 from "./Moviecard1";

function Youtube(props) {
  const [search, setSearch] = useState("");
  const [movie, setmovie] = useState([]);

  const fetchmovie = useCallback(async () => {
    if (search) {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=95ac473e2ad8432c57596d8957973bba`
      );
      setmovie(res.data.results);
    }
  }, [search]);

  useEffect(() => {
    setSearch(props.sendData);
    fetchmovie();
  }, [props.sendData, fetchmovie]);


  return (
    <div className="container">
      {search === undefined || search === "" ? (
        <div className="intro">
          <h2>Welcome to My Movie App</h2>
          <p>
            Here, you can search for any movie and get detailed information
            about it. Just type in the name of the movie in the search bar, and
            you'll see the related movies appear below. Each movie card will
            display the movie name and release date. When you hover over a movie
            card, the trailer of the movie will start playing automatically.
            Enjoy exploring movies!
          </p>
        </div>
      ) : movie.length === 0 ? (
        <p className="no-movies">
          No movies found. Please try a different search.
        </p>
      ) : (
        <div className="row">
          {movie.map((m, i) => (
            <Moviecard1 movie={m} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Youtube;
