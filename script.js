const container = document.querySelector(".container");

addEventListener("DOMContentLoaded", createGrid(16));

// Create a grid (default 16x16) within container div
function createGrid(size) {
  for (let i = 0; i < size; i++) {
    console.log(i);
    let div = document.createElement("div");
    div.textContent = i + 1;
    div.style.cssText = "box-sizing: border-box; border-style: solid; border-color: black; width: 100px; height: 100px;";
    container.appendChild(div);
  }
}