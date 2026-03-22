const gridSizeInput = document.querySelector(".grid-input");
const flexContainer = document.querySelector(".flex-container");
gridSizeInput.addEventListener("input", () => {
  flexContainer.style.width = gridSizeInput.value + "px";
  flexContainer.style.height = gridSizeInput.value + "px";
  console.log(gridSizeInput.value);
});
