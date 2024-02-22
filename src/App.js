import React from "react";
import React, { lazy, Suspense, useEffect, useState ,createContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About.js';
import Grocery from './components/Grocery.js';
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./components/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore.js";
import Cart from './components/Cart.js';

export const Context1 = createContext();
//Chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
//Dynamic import


// const Grocery = lazy(() => import("./components/Grocery.js"));
// const About = lazy(() => import("./components/About.js"));
const AppLayout = () => {
  //Authentication code
  const [userName, setUserName] = useState('');
  const [myArray, setMyArray] = useState(['one element']);
  const [isClicked, setIsClicked] = useState(false);
  const [handleHomeButtonClick, setHandleHomeButtonClick] = useState(false);
  useEffect(() => {
    // Make an API Call and send username and password
    const data = {
      name: "Surya Chandra",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName,setUserName ,handleHomeButtonClick,setHandleHomeButtonClick}}>
      <div className="app">
          <Header />
        <Context1.Provider value={{myArray,isClicked,setIsClicked,setMyArray}} >
        <Outlet />
        </Context1.Provider>,
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
//createBrowserRouter contains a list of paths.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          // <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          //  </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          // <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          //  </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element:
        <RestaurantMenu />
      },
      {
        path:'/cart',
        element:<Cart />
      },
    ],
    errorElement: <Error />,
  },
]);
console.log(appRouter);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
