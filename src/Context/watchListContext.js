import { createContext, useEffect, useState } from "react";

export const watchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState(
    localStorage.getItem("watchList").split(",") || [
    "bitcoin",
    "ethereum",
    "ripple",
    "litecoin",
    "eos",
    "iota",
  ]);

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };

  return (
    <watchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </watchListContext.Provider>
  );
};
