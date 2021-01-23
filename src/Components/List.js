import React, { useContext, useEffect, useState } from "react";
import coinGecko from "../api/coinGecko";
import { watchListContext } from "../Context/watchListContext";

function List() {
  const [coins, setCoins] = useState([]);
  const {watchList} = useContext(watchListContext)
  console.log(watchList);
  useEffect(() => {
    const fetchData = async () => {
      const response = await coinGecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum",
        },
      });
      console.log(response.data);
    };
    fetchData();
  }, []);
  return <div></div>;
}

export default List;
