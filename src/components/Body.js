import Restaurantcard, { withPromotedLabel } from "./Restaurantcard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./UserContext.js";
import { Context1 } from "../App.js";
import SearchRestaurants from "./SearchRestaurants.js";
const Body = () => {
  const context = useContext(Context1);
  const data = useContext(UserContext);
  // console.log('context: ', context);

  //local State variable -Super Powerful variable  of React
  // Whenever state variables update ,react triggers a reconciliation cycle (re-renders the component).
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  let handleHomeButtonClick = data.handleHomeButtonClick;
  useEffect(() => {
    console.log("handleHomeButtonClick clicked", handleHomeButtonClick);

    if (handleHomeButtonClick) {
      data.setHandleHomeButtonClick(false);
      setSearchText("");
      listOfRestaurants
        ? setFilteredListOfRestaurants(listOfRestaurants)
        : null;
      console.log("handleHomeButtonClick clicked", handleHomeButtonClick);
    }
  }, [handleHomeButtonClick]);
  console.log(
    "after use Effect handleHomeButtonClick clicked",
    handleHomeButtonClick
  );

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9935501&lng=77.7053638&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    let originalListOfRestaurants = await json?.data?.cards[1]?.card?.card
      ?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(originalListOfRestaurants);
    setFilteredListOfRestaurants(originalListOfRestaurants);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = (searchText) => {
    setSearchText(searchText);
    console.log(searchText);
    const filteredResUsingSearch = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredResUsingSearch);
  };

  const RestaurantCardPromoted = withPromotedLabel(Restaurantcard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!!! Please check your Internet Connection
      </h1>
    );
  }
  const { setUserName, loggedInUser } = useContext(UserContext);
  // console.log(setUserName);
  //Conditional Rendering- You have a condition and according to that you render UI it is called conditional rendering.
  //Using Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <>
      <SearchRestaurants />
      <Shimmer />
    </>
  ) : (
    <div className="body">
        

<div className="search flex items-center justify-center w-2/3 mx-auto mt-4">
  <input
    type="text"
    className="border border-solid border-black p-3 rounded-l-lg w-2/3 border-r-0"
    value={searchText}
    onKeyDown={handleKeyDown}
    onChange={(e) => handleSearch(e.target.value)}
    placeholder="Search a restaurant you want ..."
  />
  <button
    className="px-4 py-[13px] bg-green-400 rounded-r-lg hover:bg-green-500 transition-colors duration-300"
    onClick={() => handleSearch(searchText)}
  >
    Search
  </button>
</div>


      <div className="filter flex items-center flex-wrap justify-around">

        <div className="filter-btn flex items-center m-4 p-4 flex-wrap ">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg hover:bg-gray-200"
            onClick={() => {
              //Filter Logic here
              ListOfTopRestaurants = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setFilteredListOfRestaurants(ListOfTopRestaurants);
            }}
          >
            Ratings 4.0+
          </button>
        </div>
        <div className="filter-btn flex items-center m-4 p-4 flex-wrap">
          <label className="m-4">UserName</label>
          <input
            type="text"
            value={loggedInUser}
            className="m-4 border border-solid border-black"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="res-container flex flex-wrap justify-between flex-wrap">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/:" + restaurant.info.id}
          >
            {/* If the restaurant is promoted add the promoted label to it. */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resObj={restaurant} />
            ) : (
              <Restaurantcard resObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
