import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";



const root = ReactDOM.createRoot(document.getElementById("root"));










const AppLayout = () => (
  <div className="layout">
    <HeadingComponent />
    <Body />
    <Footer/>
  </div>
);

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

root.render(<AppLayout />);
