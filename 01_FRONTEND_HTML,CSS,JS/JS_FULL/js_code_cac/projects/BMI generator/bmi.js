const form = document.querySelector("form");
console.log(form);
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    const div = document.createElement("div");
    div.className = "result";
    if (bmi < 18.6) {
      const addText = document.createTextNode("Under Weight");
      div.appendChild(addText);
      results.appendChild(div);

    } else if (bmi >= 18.6 && bmi < 24) {
      const addText = document.createTextNode("Normal range");
      div.appendChild(addText);
      results.appendChild(div);
      
    } else if (bmi > 24.9) {
      const addText = document.createTextNode("Over Weight");
      div.appendChild(addText);
      results.appendChild(div);
    }
  }
});


// Before displaying any new content dynamically, clear the container element to ensure that previous content is removed.
// Update the content of the container element with the new information.
// This pattern ensures that the displayed content is always up-to-date and reflects the latest state of the application.