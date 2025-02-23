/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";

const SmoothStockTicker = () => {
  const [stocks, setStocks] = useState([
    { symbol: "GTCO", price: 29.5, change: 0.75 },
    { symbol: "ZENITHBANK", price: 26.0, change: -0.5 },
    { symbol: "DANGCEM", price: 245.0, change: 1.1 },
    { symbol: "MTNN", price: 200.0, change: -1.25 },
    { symbol: "AIRTELAFRI", price: 1400.0, change: 10.0 },
    { symbol: "BUACEMENT", price: 76.5, change: -0.75 },
    { symbol: "NESTLE", price: 1125.0, change: 15.0 },
    { symbol: "SEPLAT", price: 650.0, change: -5.0 },
    { symbol: "WAPCO", price: 23.5, change: 0.3 },
    { symbol: "UBA", price: 8.5, change: -0.2 },
  ]);

  // Update stock prices randomly every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((stock) => ({
          ...stock,
          price: Number((stock.price + (Math.random() - 0.5) * 2).toFixed(2)),
          change: Number(((Math.random() - 0.5) * 5).toFixed(2)),
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const StockItem = ({ stock }: any) => (
    <div className="inline-flex items-center space-x-2 px-4 py-3 text-white text-[12px]">
      <span className="font-semibold">{stock.symbol}</span>
      <span className="text-gray-200">${stock.price.toFixed(2)}</span>
      <span
        className={`font-medium ${
          Number(stock.change) >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {Number(stock.change) >= 0 ? "+" : ""}
        {stock.change}%
      </span>
      <span className="text-orange-400">|</span>
    </div>
  );

  return (
    <div className="w-fit bg-purple-800 shadow-lg overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        {/* First set of items */}
        <div className="flex animate-ticker whitespace-nowrap ">
          {stocks.map((stock, index) => (
            <StockItem key={`first-${stock.symbol}-${index}`} stock={stock} />
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex animate-ticker whitespace-nowrap ">
          {stocks.map((stock, index) => (
            <StockItem key={`second-${stock.symbol}-${index}`} stock={stock} />
          ))}
        </div>
      </div>
      {/* <style>
        {`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-ticker {
            animation: ticker 30s linear infinite;
          }
        `}
      </style> */}
    </div>
  );
};

export default SmoothStockTicker;
