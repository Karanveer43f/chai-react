import React from "react";
import ReactDOM from "react-dom/client";
import Chai from './chai'
import App from './App'


// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com/",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };



const reactElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank",
  },
  "Click me again"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  {reactElement}
  <App/>
  {Chai()}
  </>
);
