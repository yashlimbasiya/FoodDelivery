import React from "react";

import ReactDOM from"react-dom/client";

const heading = React.createElement("h1",{id:"heading"}, "Hello World From react");
const root = ReactDOM.createRoot(document.getElementById("root"));

const Jsxheading = () => 
(<h1 className="head" tabIndex="5"> 
Namaste React Using JSX
</h1>);

const HeadingComponent = () => 
(<div id="conatiner">
    <h1>
<Jsxheading/>
JSX Heading</h1>
</div>)




// const parent = React.createElement("div",
// {id:"parent"}, [React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"i m a h1 tag"),React.createElement("h2",
// {},"i m a h2 tag")]),React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"i m a h1 tag"),
// React.createElement("h2",{},"i m a h2 tag")])]);

console.log(Jsxheading);
root.render(<HeadingComponent/>);
