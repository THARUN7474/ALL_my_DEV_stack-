const reactElement = {
  type: "a",
  props: {
    href: "https://github.com/",
    target: "_blank",
  },
  //we can call anything -they keyname
  children: "click me to vist github",
};

const mainthing = document.querySelector("#root");
// const test = (document.createElement("div").innerHTML = "hero");
// mainthing.appendChild(test);

function customRender(reactele, container) {
  // const domele = document.createElement(reactElement.type);
  // domele.innerHTML = reactele.children;
  // domele.setAttribute('href',reactElement.props.href);
  // domele.setAttribute('target',reactElement.props.target);
  // container.appendChild(domele);

  const domele = document.createElement(reactele.type);
  domele.innerHTML = reactele.children;
  for (const prop in reactele.props) {
    // if (prop is children) continue;
    domele.setAttribute(prop, reactele.props[prop]);
  }
  container.appendChild(domele);
}

// customRender(reactElement, mainthing); // A function which takes a component and places it where it is needed.

customRender(reactElement, mainthing); //a function which takes component kind off and places it where it needed
