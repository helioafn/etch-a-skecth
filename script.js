function createDivs(numberOfDivs) {
  const totalDivs = numberOfDivs ** 2;
  for (let i = 1; i <= totalDivs; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    container.appendChild(div);
  }
}
function getNewBoardSize() {
  const size = parseInt(prompt("How many squares per side?", ""));
  if (size > 100) {
    return 100;
  } else if (size < 0) {
    return 10;
  }

  return size;
}
const container = document.querySelector("#container");
const newBoard = document.querySelector("#new-board");
createDivs(16);

container.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (target.className === "square") {
    target.setAttribute("style", "background-color:cyan;");
  }
});

newBoard.addEventListener("click", () => {
  getNewBoardSize();
});

// container.addEventListener("mouseout", (event) => {
//   let target = event.target;
//   if (target.className === "square") {
//     target.setAttribute("style", "background-color: initial;");
//   }
// });
