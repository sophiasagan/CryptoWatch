import { createContext, useState } from "react";

export const watchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const [watchList, setWatch] = useState(["bitcoin", "ethereum", "ripple"]);

  return (
    <watchListContext.Provider value={{watchList}}>
      {props.children}
    </watchListContext.Provider>
  );
};
