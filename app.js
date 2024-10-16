import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am a h1 tag")
//   )
// );

// const heading = React.createElement("h1", { id: "heading" }, "Hello ! React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// root.render(parent);

const Title = () => <h1 className="head">Title Component</h1>;
const num = 1000;
const HeadingComponent = () => (
  <div id="container">
    <h2>{num + 200}</h2>
    <Title />
    <h1 className="heading">Namaste React using Functional Components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(jsxHeading);

root.render(<HeadingComponent />);
