import React from "react";
import "./Header.css";
import { watchListContext } from "../context/context";

const Header = () => {
  const { count, setShowWatchList } = watchListContext();
  return (
    <nav>
      <div className="navContainer">
        <h1 onClick={() => setShowWatchList(false)}>Watchthis</h1>
        <p onClick={() => setShowWatchList(true)}>
          watch list <span>{count}</span>
        </p>
      </div>
    </nav>
  );
};

export default Header;
