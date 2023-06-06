const container = document.querySelector(".container");

addEventListener("DOMContentLoaded", createGrid(16));

// Create a grid (default 16x16) within container div
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    console.log(i);
    let div = document.createElement("div");
    div.textContent = i + 1;
    div.style.cssText = "box-sizing: border-box; border-style: solid; border-color: black; width: 100px; height: 100px;";

    div.addEventListener("mouseover", () => {
      div.className = "hover";
    })

    container.appendChild(div);
  }
}

let body = document.querySelector("body");
let button = document.createElement("button");
button.textContent = "CLICK ME";
body.appendChild(button);

button.addEventListener("click", () => {
  let size = prompt("Size?", 16);
  while (isNaN(size) || size < 16 || size > 100) {
    size = prompt("Please input a valid number");
  } 

  console.log(size);
})