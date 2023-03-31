import React, { useEffect, useState } from "react";
import "./Homepage.css";
import CardListContainer from "../component/CardListContainer";
import instance from "../apis/axios";
import { api_key } from "../apis/axios";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await instance.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US`
      );
      setMovies(res.data.results);
    };
    fetchData();
  }, [movies]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <section className="homepage">
      <div className="inputContainer">
        <input
          type="search"
          placeholder="search movie"
          onChange={(e) => setSearchfield(e.target.value)}
        />
      </div>
      {filteredMovies && <CardListContainer movies={filteredMovies} />}
    </section>
  );
};

export default Homepage;
