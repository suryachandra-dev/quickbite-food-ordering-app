import { LOGO_URL } from "./utils/constants.js";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext.js";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dup = useState("Login");
  const [btnNameReact, setBtnNameReact] = dup;
  const data = useContext(UserContext);
  const setHandleHomeButtonClick = data.setHandleHomeButtonClick;
  const { loggedInUser } = data;

  useEffect(() => {
    console.log("Header UseEffect Called");
  }, [btnNameReact]);

  const onHandleHomeClick = () => {
    setHandleHomeButtonClick(true);
  };


  const totalCartItems = useSelector((store) => {
    console.log(store);
    return store.cart.totalItems;
  });

  return (
    <div className="header flex justify-between sm:bg-gray-100 lg:bg-gray-100  shadow-lg flex-wrap">
      <div className="logo-container flex justify-center items-center flex-wrap ml-2">
       <Link to='/'><img className="w-[66px] rounded-3xl " src={LOGO_URL} alt="Logo" /></Link> 
        <h1 className="p-4 text-2xl text-red-500 font-bold"><span className="text-gray-400">QUICK</span>BITE</h1>
      </div>

      <div className="flex items-center flex-wrap">
        <ul className="flex p-4 m-4 items-center flex-wrap">
          <li>
            <Link
              to="/"
              onClick={onHandleHomeClick}
              className="px-4 hover:bg-gray-200 py-2 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 hover:bg-gray-200 py-2 rounded "
            >
              Contact Us
            </Link>{" "}
          </li>
          <li>
            <Link to="/about" className="px-4 hover:bg-gray-200 py-2 rounded">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="px-4 hover:bg-gray-200 py-2 rounded"
            >
              Grocery
            </Link>
          </li>
          <li className="font-bold px-4">
            <Link
              to="/cart"
              className="flex items-center flex-wrap hover:bg-gray-200 py-2 px-4 rounded"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-gray-800 text-2xl"
              />
              {totalCartItems > 0 && (
                <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm ml-1">
                  {totalCartItems}
                </span>
              )}
            </Link>
          </li>
          <li className="px-4">
            <button
              className="login hover:bg-gray-200 py-2 px-4 rounded"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="font-bold px-4">
            <Link to="/" className="hover:bg-gray-200 py-2 px-4 rounded">
              {loggedInUser}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;





