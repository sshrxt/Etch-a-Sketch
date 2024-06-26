let gridSize = 600;
let color = "black";
const colorInput = document.getElementById("favcolor");
const grid = document.querySelector(".sketch-container");

grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

var slider = document.getElementById("myRange");
var output = document.getElementById("slider-info");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function () {
  output.innerHTML = this.value + " x " + this.value;
  removeCurrGrid();
  createGrid(this.value);
};

function removeCurrGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function changeCellColor() {
  this.style.backgroundColor = getCellColor();
}

function getCellColor() {
  if (color === "black") {
    return "black";
  } else if (color === "white") {
    return "white";
  } else if (color === "custom") {
    return `${colorInput.value}`;
  } else {
    return getRandomColor();
  }
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

function createGrid(value) {
  console.log(value);
  const cellSize = gridSize / value;
  for (let i = 0; i < value * value; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${cellSize}px`;
    gridCell.style.height = `${cellSize}px`;
    gridCell.classList.add("cell");

    grid.appendChild(gridCell);

    gridCell.addEventListener("mouseover", changeCellColor);
  }
  addEventListener();
}

function addEventListener() {
  const colorInput = document.getElementById("favcolor");
  const random = document.querySelector("#random");
  const black = document.querySelector("#black");
  const eraser = document.querySelector("#eraser");
  const reset = document.querySelector("#reset");

  random.addEventListener("click", () => {
    color = "change";
  });
  black.addEventListener("click", () => {
    color = "black";
  });
  colorInput.addEventListener("input", () => {
    color = "custom";
  });
  eraser.addEventListener("click", () => {
    color = "white";
  });
  reset.addEventListener("click", () => {
    const grid = document.querySelectorAll(".sketch-container div");
    for (let i = 0; i < grid.length; i++) {
      const currDiv = grid[i];
      currDiv.style.backgroundColor = "white";
    }
  });
}

createGrid(16);
