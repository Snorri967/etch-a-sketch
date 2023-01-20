const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
document.body.appendChild(gridContainer);

const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const buttonContainer = document.createElement("div")
buttonContainer.classList.add("buttonContainer");
container.appendChild(buttonContainer);

const blackPenButton = document.createElement("button");
blackPenButton.classList.add("blackPenButton");
blackPenButton.textContent = "Black"; 
blackPenButton.disabled = true;
buttonContainer.appendChild(blackPenButton);

const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Reset";
buttonContainer.appendChild(resetButton)

const multiColorPenButton = document.createElement("button");
multiColorPenButton.classList.add("multiColorPenButton");
multiColorPenButton.textContent = "Multi";
multiColorPenButton.disabled = "true";
buttonContainer.appendChild(multiColorPenButton);

const titleContainer = document.createElement("div");
titleContainer.classList.add("titleContainer");
container.appendChild(titleContainer);

const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "Sketch-a-Etch!";
titleContainer.appendChild(title);

function chooseGridSize() {
  const gridSizeButton = document.createElement("button");
  gridSizeButton.classList.add("gridSizeButton");
  gridSizeButton.textContent = "Size";
  buttonContainer.appendChild(gridSizeButton);
  gridSizeButton.addEventListener("click", () => {
    let gridSize = +prompt("Enter a size for your grids, no bigger than 100 or 0 or less!");
    if (gridSize > 100 || gridSize <= 0) {
      location.reload();
    } else {
      createGrids(gridSize);
      gridSizeButton.disabled = true;
      blackPenButton.disabled = false;
      multiColorPenButton.disabled = false;
    }
  })
}

function createGrids(gridSize) {
  let gridAmount = gridSize ** 2;
  for (let i = 1; i <= gridAmount; i++) {
    const gridDiv = document.createElement("div")
    const divSize = 500 / gridSize;
    gridDiv.classList.add(`gridDiv${i}`);
    gridDiv.style.width = `${divSize}px`;
    gridDiv.style.height = `${divSize}px`;
    gridContainer.appendChild(gridDiv);
  }
}

function blackPen(gridContainer) {
  blackPenButton.addEventListener("click", () => {
    Array.from(gridContainer.children).forEach(child => {
      child.addEventListener("mouseover", () => child.style.backgroundColor = "black");
    })  
  })
}

function multiColorPen(gridContainer) {
  multiColorPenButton.addEventListener("click", () => {
    Array.from(gridContainer.children).forEach(child => {
      child.addEventListener("mouseover", () => {
        let x = Math. floor(Math. random() * 256);
        let y = Math. floor(Math. random() * 256);
        let z = Math. floor(Math. random() * 256);
        let backgroundColor = `rgb(${x}, ${y}, ${z})`;
        child.style.backgroundColor = backgroundColor;
      })
    })
  })

}

function resetGrid() {
  resetButton.addEventListener("click", () => {
    location.reload();
  })
}

chooseGridSize();
blackPen(gridContainer);
multiColorPen(gridContainer);
resetGrid();
