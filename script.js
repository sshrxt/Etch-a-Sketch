let gridSize = 600;
let row = 16;
let col = 16;

const grid = document.querySelector(".sketch-container");
grid.style.width = `${gridSize}px`;
grid.style.height = `${gridSize}px`;

function changeCellColor() {
  this.style.backgroundColor = "black";
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
}

createGrid();
