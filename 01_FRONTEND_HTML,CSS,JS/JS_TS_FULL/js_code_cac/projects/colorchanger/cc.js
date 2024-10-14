const body = document.querySelector("body");

const canvas = document.querySelector(".canvas");

const button = document.querySelectorAll(".button");

// console.log(button);
// console.log(canvas);
// console.log(body);

button.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.classList);
    // console.log(e.target.classList.value);
    // console.log(e.target.id);
    // body.classList.remove());

    // /**********method 1********************** */
    //we can remove all class list before and add what clicked
    // body.className = "";
    // body.classList.add(e.target.id);

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
      console.log(body.classList.value);
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      console.log(body.classList.value);
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

// button.forEach((button) => {
//   console.log(button);
// });
