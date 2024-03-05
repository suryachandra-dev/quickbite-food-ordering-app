import Shimmer from "./Shimmer";
import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext } from "react";
import { Context1 } from "../App";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const context = useContext(Context1);
  console.log(context);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  if (!resInfo) {
    return <RestaurantMenuShimmer/>;
  } else {
    const  grouped=
      resInfo?.data?.cards;
      const [itemCardsFilter]=grouped.filter((cardItems)=>{
        return (cardItems?.groupedCard?.cardGroupMap?.REGULAR?.cards ? true:null);
      });
      const itemCards=itemCardsFilter?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const [resCardFilter]=grouped.filter((card) => {
        return (card?.card?.card?.info ? true : false);
      });
    // const resData = resInfo?.data?.cards[0]?.card?.card?.info;
    const resData = resCardFilter.card?.card?.info;
    console.log(itemCards);
    const categories = itemCards.filter((c) => {
      return c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ? true
        : false;
    });
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{resData.name}</h1>
        <p className="font-bold text-lg">
          {resData.cuisines.join(",")}-{resData.costForTwoMessage}
        </p>
        {/* Categories Accordions */}
        {categories.map((category, index) => {
          const { title } = category.card.card;
          return (
            <RestaurantCategory
              key={title}
              data={category}
              showItems={index == showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    );
  }
};
export default RestaurantMenu;
