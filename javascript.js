function fillGrid() {
  flexContainer.innerHTML = "";
  flexContainer.style.width = gridSizeInput.value + "px";
  flexContainer.style.height = gridSizeInput.value + "px";
  const gridSizeInPx = parseInt(gridSizeInput.value);
  const cellSizeInPx = 25;
  const cellsPerSide = gridSizeInPx / cellSizeInPx;

  for (let i = 0; i < cellsPerSide * cellsPerSide; i++) {
    const cell = document.createElement("div");
    flexContainer.appendChild(cell);
  }
}

const gridSizeInput = document.querySelector(".grid-input");
const flexContainer = document.querySelector(".flex-container");
const button = document.querySelector("button");

gridSizeInput.addEventListener("input", fillGrid);

button.addEventListener("click", () => {
  flexContainer.innerHTML = "";
  fillGrid();
});
