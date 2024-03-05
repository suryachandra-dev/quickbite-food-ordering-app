import { CDN_URL } from "./utils/constants.js";
import UserContext from "./UserContext.js";
import React from "react";
import { useContext } from "react";
const Restaurantcard = (props) => {
  console.log(props);
  const { resObj } = props;
  console.log(resObj);
  const { info } = resObj;
  const { name, cuisines, avgRating, sla, costForTwo } = info;
  const { deliveryTime, lastMileTravelString } = sla;
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  // const styleCard={
  //     backgroundColor:'#f0f0f0',
  // }
  return (
    <div className="res-card m-4 p-4  w-[268px] rounded-lg bg-gray-100 hover:bg-gray-200   ">
      {info.cloudinaryImageId ? (
        <img
          className="res-logo rounded-sm"
          src={CDN_URL + info.cloudinaryImageId}
          alt="Cloudinary Image"
        />
      ) : null}

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="mb-0">{cuisines.join(" , ")}</h4>
      <div className="flex items-center flex-wrap">
        <span className="bg-[#00ad1d] text-white rounded-md p-1  font-bold ">
          {avgRating} &#9734;
        </span>
        <span className="font-bold text-3xl  inline-block  ml-1 mr-1  pb-1 ">
          &middot;
        </span>
        <h4 className="inline-block  font-bold p-1 ">
          {deliveryTime} Minutes{" "}
        </h4>
          <span className="font-bold text-3xl  inline-block ml-1 mr-1 ">
            &middot;
          </span>

          <h4 className="font-bold inline-block">{lastMileTravelString}</h4>

        <div className="flex items-center">
          <span className="font-bold text-3xl  inline-block  ">&middot;</span>

          <h4 className="font-bold inline-block">{costForTwo}</h4>
        </div>
      </div>

      <h4>User:{loggedInUser}</h4>
    </div>
  );
};
// Higher Order Component
//Input -RestaurantCard==>RestaurantCardPromoted
export const withPromotedLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};
export default Restaurantcard;
