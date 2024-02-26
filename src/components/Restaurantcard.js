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
  const { deliveryTime } = sla;
  const data=useContext(UserContext);
  const {loggedInUser}=data;
  // const styleCard={
  //     backgroundColor:'#f0f0f0',
  // }
  return (
    <div className="res-card m-4 p-4  w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200   "
    >{info.cloudinaryImageId?<img
      className="res-logo rounded-sm"
      src={CDN_URL + info.cloudinaryImageId}
      alt="Cloudinary Image"
    />:null}
      
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} Stars </h4>
      <h4>{deliveryTime} Minutes </h4>
      <h4>{costForTwo}</h4>
      <h4>User:{loggedInUser}</h4>

    </div>
  );
};
// Higher Order Component
//Input -RestaurantCard==>RestaurantCardPromoted
export const withPromotedLabel=(Restaurantcard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <Restaurantcard {...props}/>
      </div>
    )
  }
}
export default Restaurantcard;
