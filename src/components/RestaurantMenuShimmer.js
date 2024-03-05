import React from "react";

const RestaurantMenuShimmer = () => {
  const shimmerCards = Array.from({ length: 10 }, (_, index) => index);
  console.log(shimmerCards.length);
  return (
    <div>
      <div className="w-5/12 mx-auto my-5 bg-gray-100 shadow-lg p-4 h-[50px] "></div>
      <div className="w-4/12 mx-auto my-5 bg-gray-100 shadow-lg p-4 "></div>

      {shimmerCards.map((index) => {
        return (
          <div key={index}>
            <div className="text-center ">
              <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 h-[50px]"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuShimmer;
