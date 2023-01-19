const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function createGrids() {
  let gridAmount = 16 * 16;
  for (let i = 1; i <= gridAmount; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add(`gridDiv${i}`);
    container.appendChild(gridDiv);
  }
}

createGrids();