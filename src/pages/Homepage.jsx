import React, { useEffect, useState, useRef } from "react";
import "./Homepage.css";
import CardListContainer from "../component/CardListContainer";
import instance from "../apis/axios";
import { api_key } from "../apis/axios";
import { watchListContext } from "../context/context";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const { watchListRef, showWatchList } = watchListContext();

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`
      );
      setMovies(res.data.results);
      console.log(res.data.results);
    };
    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchfield.toLowerCase())
  );

  if (!movies) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="homepage">
      <div className="inputContainer">
        <input
          type="search"
          placeholder="search movie"
          onChange={(e) => setSearchfield(e.target.value)}
        />
      </div>
      {movies && (
        <CardListContainer
          movies={showWatchList ? watchListRef.current : filteredMovies}
        />
      )}
    </section>
  );
};

export default Homepage;
