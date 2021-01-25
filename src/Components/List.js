import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../api/coinGecko";
import { watchListContext } from "../Context/watchListContext";
import Coin from "./Coin";
import "./List.css";

function List() {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(watchListContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(watchList);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };
    if (watchList.length > 0) {
      fetchData(); // corrects fetching all data
    } else {
      setCoins([]); // corrects not deleting last coin
    }
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div class="load-wrapp">
      <div class="load-7">
        <p>Loading 7</p>
        <div class="square-holder">
          <div class="square"></div>
        </div>
      </div>
    </div>;
    }

    return (
      <ul className="coinlist__group">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
      </ul>
    );
  };
  return <div>{renderCoins()}</div>;
}

export default List;
