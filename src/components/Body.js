import Restaurantcard, { withPromotedLabel } from "./Restaurantcard.js";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./UserContext.js";
import { Context1 } from "../App.js";
const Body = () => {
  const context = useContext(Context1);
  const data=useContext(UserContext);
  // console.log('context: ', context);
  
  //local State variable -Super Powerful variable  of React
  // Whenever state variables update ,react triggers a reconciliation cycle (re-renders the component).
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  let handleHomeButtonClick = data.handleHomeButtonClick;
  useEffect(() =>{
    console.log('handleHomeButtonClick clicked',handleHomeButtonClick);

    if(handleHomeButtonClick) {
      data.setHandleHomeButtonClick(false);
      setSearchText('');
      listOfRestaurants ? setFilteredListOfRestaurants(listOfRestaurants):null;
      console.log('handleHomeButtonClick clicked',handleHomeButtonClick);
    }
  },[handleHomeButtonClick])
  console.log('after use Effect handleHomeButtonClick clicked',handleHomeButtonClick);
 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4107978&lng=78.341552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optional Chaining
    let originalListOfRestaurants = await json?.data?.cards[1]?.card?.card
      ?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(originalListOfRestaurants);
    setFilteredListOfRestaurants(originalListOfRestaurants);
  };
  const handleKeyDown = (event) =>{
    if(event.key === 'Enter'){
      handleSearch();
    }
  }
  const handleSearch = () => {
      console.log(searchText);
      const filteredResUsingSearch = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredListOfRestaurants(filteredResUsingSearch);
    }
  
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
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={
              //Filter the restaurant cards and update the UI
              //SearchText
              handleSearch
            }
          >
            Search
          </button>
        </div>




        <div className="filter-btn flex items-center m-4 p-4 ">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              //Filter Logic here
              ListOfTopRestaurants = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setFilteredListOfRestaurants(ListOfTopRestaurants);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="filter-btn flex items-center m-4 p-4 ">
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

      <div className="res-container flex flex-wrap justify-between">
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
