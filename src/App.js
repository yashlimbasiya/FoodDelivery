import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"


 // outlet for components to load according to the routes
 // All children will pass from outlet according to the route


const AppLayout = () => (
  <div className="layout">
    <HeadingComponent />
    <Outlet />           
    <Footer/>
  </div>
);




const appRouter = createBrowserRouter([
  {path:"/",
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    
    {path: "/",
    element:<Body/>},
    {path: "/about",
    element:<About/>},
  {path: "/contact",
    element:<Contact/>},
  {path: "/contact",
    element:<Contact/>},
  {path: "/restaurant/:resid",
    element:<RestaurantMenu/>},
  
  
  
  
  ]}
  
])






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
