const heading = React.createElement("h1",{id:"heading"}, "Hello World From react");
const tree = ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",
{id:"parent"}, [React.createElement("div",{id:"child"},
[React.createElement("h1",{},"i m a h1 tag"),React.createElement("h2",
{},"i m a h2 tag")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"i m a h1 tag"),
React.createElement("h2",{},"i m a h2 tag")])]);

console.log(parent);
tree.render(parent);
