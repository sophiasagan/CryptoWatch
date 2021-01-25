import React from "react";
import { Link } from "react-router-dom";
import downIcon from "../Assets/downIcon";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import "./Coin.css";

function Coin({ coin, deleteCoin }) {
  return (
    <Link to={`/coins/${coin.id}`} className="coin">
      <li className="coinlist__item">
        <img className="coinlist__image" src={coin.image} alt="" />
        <span className="coinlist__name">{coin.name}</span>
        <span className="coinlist__symbol">{coin.symbol}</span>
        <span className="coinlist__price">${coin.current_price}</span>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "difference__red"
              : "difference__green"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <AiFillCaretDown />
          ) : (
            <AiFillCaretUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
        <TiDeleteOutline
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete"
        />
      </li>
    </Link>
  );
}

export default Coin;
