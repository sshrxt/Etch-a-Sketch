let gridSize = 600;
let row = 16;
let col = 16;

let color = "black";

const grid = document.querySelector(".sketch-container");
grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

function changeCellColor() {
  this.style.backgroundColor = getCellColor();
}

function getCellColor() {
  if (color === "black") {
    return "black";
  } else {
    return getRandomColor();
  }
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Construct the CSS color string using RGB values
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

function createGrid() {
  for (let i = 0; i < row * col; i++) {
    const gridCell = document.createElement("div");
    gridCell.style.width = `${gridSize / col - 2}px`;
    gridCell.style.height = `${gridSize / row - 2}px`;
    gridCell.classList.add("cell");

    grid.appendChild(gridCell);

    gridCell.addEventListener("mouseover", changeCellColor);
  }
  addEventListener();
}

function addEventListener() {
  const random = document.querySelector("#random");
  const black = document.querySelector("#black");
  const reset = document.querySelector("#reset");

  random.addEventListener("click", () => {
    color = "change";
  });
  black.addEventListener("click", () => {
    color = "black";
  });
  reset.addEventListener("click", () => {
    const grid = document.querySelectorAll(".sketch-container div");
    for (let i = 0; i < grid.length; i++) {
      const currDiv = grid[i];
      currDiv.style.backgroundColor = "white";
    }
  });
}

createGrid();
