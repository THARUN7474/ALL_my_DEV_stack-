const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// setInterval(function () {
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toTimeString();
//   // clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

let animationCount = 0; // Counter to track the number of times the animation has run

const animationInterval = setInterval(function () {
  const div = document.createElement("div");
  div.className = "clock";
  const text = document.createTextNode(`it's Th@run`);
  div.appendChild(text);
  // div.style.textAlign = "center";
  // div.style.backgroundColor = "green";
  // div.style.width = "100px";
  // div.style.height = "50px";
  // div.style.display = "inline-block";
  // div.style.position = "absolute";
  // div.style.background = "linear-gradient(to bottom right, #4e54c8, #8f94fb)";
  // div.style.color = "#fff";
  // div.style.borderRadius = "10px";
  // div.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  // div.style.display = "flex";
  // div.style.justifyContent = "center";
  // div.style.alignItems = "center";
  // div.style.fontWeight = "bold";
  // Inside the setInterval function where you create the div
  div.className = "clock clock-style fireworks-animation";

  // div.style.top = `${Math.random() * window.innerHeight}px`;
  // div.style.left = `${Math.random() * window.innerWidth}px`;
  // document.body.appendChild(div);
  // Set random top and left positions within the window boundaries
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  let randomTop, randomLeft;
  let overlapping = true;

  // Loop until no overlapping occurs
  while (overlapping) {
    randomTop = Math.random() * (windowHeight - 100); // Subtract 50 for the height of the div
    randomLeft = Math.random() * (windowWidth - 150); // Subtract 100 for the width of the div
    overlapping = false;

    // Check for overlapping with the clock element
    const clockRect = clock.getBoundingClientRect();
    if (
      randomTop >= clockRect.top - 50 &&
      randomTop <= clockRect.bottom &&
      randomLeft >= clockRect.left - 100 &&
      randomLeft <= clockRect.right
    ) {
      overlapping = true;
      continue; // Retry if overlapping with clock
    }

    // Check for overlapping with existing divs
    const existingDivs = document.querySelectorAll(".clock");
    existingDivs.forEach((existingDiv) => {
      const existingRect = existingDiv.getBoundingClientRect();
      if (
        randomTop >= existingRect.top - 50 &&
        randomTop <= existingRect.bottom &&
        randomLeft >= existingRect.left - 100 &&
        randomLeft <= existingRect.right
      ) {
        overlapping = true;
      }
    });
  }

  div.style.top = `${randomTop}px`;
  div.style.left = `${randomLeft}px`;
  document.body.appendChild(div);
  // Increment the animation counter
  animationCount++;

  // Check if the animation has run a certain number of times (e.g., 10 times)
  if (animationCount >= 20) {
    // Stop the animation after 10 repetitions
    clearInterval(animationInterval);
  }
}, 1000);
