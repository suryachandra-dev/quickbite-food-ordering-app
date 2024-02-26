import { LOGO_URL } from "./utils/constants.js";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./UserContext.js";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const dup = useState("Login");
  const [btnNameReact, setBtnNameReact] = dup;
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  // const handleHomeButtonClick=data.handleHomeButtonClick;
  const setHandleHomeButtonClick = data.setHandleHomeButtonClick; //
  const { loggedInUser } = data;
  //If there is no dependency array => UseEffect will be called on every render and re render
  useEffect(() => {
    console.log("Header UseEffect Called");
  }, [btnNameReact]);
  const onHandleHomeClick = () => {
    setHandleHomeButtonClick(true);
  };
  //subscribing to the store using a useSelector and useSelector is a hook
  const cartItems = useSelector((store) => {
    console.log(store);
    return store.cart.cartItems;
  });
  const totalCartItems = useSelector((store) => {
    console.log(store);
    return store.cart.totalItems;
  });
  return (
    <div className=" header flex justify-between sm:bg-yellow-50 lg:bg-green-50 bg-pink-100 shadow-lg flex-wrap ">
      <div className="logo-container flex justify-center items-center flex-wrap">
        <img className="w-20" src={LOGO_URL} />
        <h1 className="p-4 text-3xl text-green-500 italic">QuickBite</h1>
      </div>

      <div className="flex items-center flex-wrap">
        <ul className="flex p-4 m-4 items-center flex-wrap">
          <li>Online Status:</li>
          <li className="px-4 flex ">
            {onlineStatus ? (
              <div className="w-11 pl-3 ">
                <img
                  src="https://fleetsupport.mobilelinkgen.com/hc/article_attachments/360086975611/ReadyStatus.svg"
                  alt="Green Online Dot"
                />
              </div>
            ) : (
              <div className="pl-8">
                <ul className="list-disc text-6xl text-red-600 pl-8 items-center leading-none">
                  <li className="leading-none "></li>
                </ul>
              </div>
            )}
          </li>
          <li className="px-4">
            <Link to="/" onClick={onHandleHomeClick}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
       
              <Link to="/cart" className="flex items-center flex-wrap">
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-800 text-2xl" />
            {totalCartItems > 0 && (
              <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm ml-1">{totalCartItems}</span>
            )}
          </Link>
          </li>
          <li className="px-4">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4 font-bold">
            <Link to="/">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
