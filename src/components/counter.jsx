import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title }) {
  return (
    <div className="counter flex flex-col items-center">
  <div className="flex items-center">
    <CountUp duration={10} className="text-8xl font-bold text-lime-400" end={number} />
    <span className="text-7xl font-bold text-blue-600">+</span>
  </div>
  <span className="block mt-2 text-4xl font-bold text-gray-600">{title}</span>
</div>

  );
}