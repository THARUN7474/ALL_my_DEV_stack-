// to make a rondom color code

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const start = document.querySelector("#start");
const stopp = document.querySelector("#stop");

let idinterval;

const addbgcolors = function () {
  if (!idinterval) {
    idinterval = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopfunc = function () {
  clearInterval(idinterval);
  console.log("stop");
  idinterval = null;
  // prevent infinite loop----or memory effective using as soon as use of this var over 000we are making it referencingby making it to null, we can use agin when we need 
  //with out this her null line and in addbgcolor the if(!id..) condition also code runs but it alwasy overwrites ----load so for professional practices use null lines
};

start.addEventListener("click", addbgcolors, false);

stopp.addEventListener("click", stopfunc, false);
