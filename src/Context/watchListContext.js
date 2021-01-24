import { createContext, useState } from "react";

export const watchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([
    "bitcoin",
    "ethereum",
    "ripple",
    "litecoin",
    "eos",
    "iota",
  ]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  return (
    <watchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </watchListContext.Provider>
  );
};
