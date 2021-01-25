import React, { useContext, useState } from "react";
import { watchListContext } from "../Context/watchListContext";

function AddCoin() {
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(watchListContext);

  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "cardano",
    "monero",
    "chainlink",
    "xrp",
    "aave",
    "tether",
    "polkadot",
    "binancecoin",
    "stellar",
    "tron",
    "iota",
    "dash",
    "basic-attention-token",
    "crypto-com-chain",
    "yearn-finance",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {availableCoins.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default AddCoin;
