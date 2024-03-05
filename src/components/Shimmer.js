// Shimmer.js
import React from "react";

const Shimmer = () => {
  // Create an array of size 20
  const shimmerCards = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="shimmer-container flex flex-wrap justify-between">
      {/* Map through the array to create shimmer cards */}
      {shimmerCards.map((index) => (
        <div
          key={index}
          className="shimmer-card   rounded-lg  p-4 m-4 bg-gray-100 pt-2"
        >
          <h3 className="w-[220px] h-[257px] m-1  mt-4 bg-gray-200"></h3>
          <h4 className="w-[125px] h-[30px] m-1 mt-4 mb-4 bg-gray-200"></h4>
          <h4 className="w-[160px] h-[25px] m-1 bg-gray-200"></h4>
          <h4 className="w-[180px] h-[25px] m-1 bg-gray-200"></h4>
          <h4 className="w-[200px] h-[25px] m-1 bg-gray-200"></h4>
          <h4 className="w-[220px] h-[25px] m-1 bg-gray-200"></h4>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
