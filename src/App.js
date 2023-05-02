import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import {Provider} from"react-redux";
import Cart from "./components/Cart";
import store from "./utils/store"
// import InstaMart from "./components/instaMart";
const InstaMart = lazy( ()=> import("./components/InstaMart"))
// upon on demand component loading, React suspends it loading
// When bundled into chunks react will try to render something which is not there YET, as it will just take a while for SPA to load due to lazy method
// by adding <Suspense> wait for that promise to resolve untill it loads the components


//lazy loading
//chunking
// ON DEMAND LOADING    CHUNKING

// outlet for components to load according to the routes
// All children will pass from outlet according to the route

const AppLayout = () => (
  <div className="layout">
    <Provider store={store}>
    <HeadingComponent />
    <Outlet />
    <Footer />
    </Provider>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/instaMart", element:<Suspense fallback={<Shimmer/>}><InstaMart /> </Suspense> },
      { path: "/restaurant/:resid", element: <RestaurantMenu /> },    // dynamic route
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/*
header
-logo
-nav items

body
-search bar
-card container
- -restrau card

footer
-copy right
- address
-contact info



*/

// const parent = React.createElement("div",
// {id:"parent"}, [React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"i m a h1 tag"),React.createElement("h2",
// {},"i m a h2 tag")]),React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"i m a h1 tag"),
// React.createElement("h2",{},"i m a h2 tag")])]);
