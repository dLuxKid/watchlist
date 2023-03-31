import React from "react";
import "./movieCard.css";

const MovieCard = ({ title, src, overview }) => {
  return (
    <div className="cardContainer">
      <div className="movieImg">
        <img src={`https://image.tmdb.org/t/p/original/${src}`} alt={title} />
      </div>
      <div className="movieDetails">
        <h3>{title}</h3>
        <p>{overview}</p>
        <div className='addToWatchList'>
          <button>add to watch list</button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
