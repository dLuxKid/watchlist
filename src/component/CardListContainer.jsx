import React from "react";
import MovieCard from './MovieCard'
import "./cardList.css";

const CardListContainer = ({ movies }) => {
  return (
    <div className="cardListContainer">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          src={movie?.backdrop_path}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default CardListContainer;
