import { useContext, createContext, useRef, useState } from "react";

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const watchListRef = useRef([]);
  const [count, setCount] = useState(0);
  const [showWatchList, setShowWatchList] = useState(false);

  const addToWatchList = (newMovie) => {
    if (watchListRef.current.findIndex(movie => movie.id === newMovie.id) === -1) {
      watchListRef.current.push(newMovie);
      setCount((count) => (count += 1));
    }
    return watchListRef;
  };

  const removeFromWatchList = (id) => {
    watchListRef.current = watchListRef.current.filter((movie) => movie.id !== id);
    console.log(watchListRef);
    setCount((count) => (count -= 1));
    return watchListRef
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
