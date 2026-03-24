function fillGrid() {
  clearGrid();
  grid.style.width = gridSizeInput.value + "px";
  const gridSizeInPx = parseInt(gridSizeInput.value);
  const cellSizeInPx = 25;
  const cellsPerSide = gridSizeInPx / cellSizeInPx;

  for (let i = 0; i < cellsPerSide * cellsPerSide; i++) {
    const cell = document.createElement("div");

    cell.addEventListener("mousedown", () => {
      isDrawing = true;
      cell.classList.add("colorized-cell");
    });
    cell.addEventListener("mouseup", () => {
      isDrawing = false;
    });
    cell.addEventListener("mouseover", drawCell);

    grid.appendChild(cell);
  }
}

function drawCell(event) {
  if (isDrawing) {
    event.target.classList.add("colorized-cell");
  }
}

function clearGrid() {
  grid.innerHTML = "";
}

let isDrawing = false;

const gridSizeInput = document.querySelector(".grid-input");
const grid = document.querySelector(".grid");
const button = document.querySelector("button");

gridSizeInput.addEventListener("input", fillGrid);
button.addEventListener("click", fillGrid);

fillGrid();
