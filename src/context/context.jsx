import { useContext, createContext, useRef, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const watchListRef = useRef([]);
  const [count, setCount] = useState(0);
  const [showWatchList, setShowWatchList] = useState(false);

  const addToWatchList = (movie) => {
    if (watchListRef.current.indexOf(movie.id) === -1) {
      watchListRef.current.push(movie);
      console.log(watchListRef.current);
      setCount((count) => (count += 1));
    }
    return watchListRef;
  };

  const removeFromWatchList = (id) => {
    watchListRef.current.filter((movie) => movie.id !== id);
  };

  return (
    <stateContext.Provider
      value={{
        count,
        watchListRef,
        addToWatchList,
        showWatchList,
        setShowWatchList,
        removeFromWatchList,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const watchListContext = () => useContext(stateContext);
