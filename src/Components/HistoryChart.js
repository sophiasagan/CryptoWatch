import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { historyOptions } from "../config/chartConfig";
import "./HistoryChart.css";



function HistoryChart({ data }) {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
      
    //verify chartRef has a value - canvas has been rendered
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} price`,
              data: determineTimeFormat(),
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4",
              pointRadius: 0,
            },
          ],
        },
        options: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: "white",
              fontSize: 16,
            },
          },
          ...historyOptions,
        },
      });
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="priceDetail">${detail.current_price.toFixed(2)}</p>
          <p
            className={
              detail.price_change_24h < 0
                ? "difference__red"
                : "difference__green"
            }
          >
            {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="chart">
      <div>{renderPrice()}</div>
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
      <div className="chart__buttons">
        <button
          onClick={() => setTimeFormat("24h")}
          className="24h__button button"
        >
          24h
        </button>
        <button onClick={() => setTimeFormat("7d")} className="7d__button button">
          7d
        </button>
        <button onClick={() => setTimeFormat("1y")} className="1y__button button">
          1y
        </button>
      </div>
    </div>
  );
}

export default HistoryChart;
