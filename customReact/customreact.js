function customRender(reactElement, mainContainer) {
  /*const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);

  mainContainer.appendChild(domElement);*/

  console.log("function called");
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (let prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);
