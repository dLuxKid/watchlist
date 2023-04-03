import React from "react";
import "./movieCard.css";
import { watchListContext } from "../context/context";

const MovieCard = ({ title, src, overview, id }) => {
  const { addToWatchList, removeFromWatchList, showWatchList } =
    watchListContext();

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <div className="cardContainer">
      <div className="movieImg">
        <img src={`https://image.tmdb.org/t/p/original/${src}`} alt={title} />
      </div>
      <div className="movieDetails">
        <h3>{title}</h3>
        <p>{truncate(overview, 200)}</p>
        {!showWatchList ? (
          <div
            className="watchListBtn"
            onClick={() => addToWatchList({ id, src, title, overview })}
          >
            <button>add to list</button>
          </div>
        ) : (
          <div
            className="watchListBtn"
            onClick={() => removeFromWatchList(id)}
          >
            <button>remove from list</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
