//** === Video Game Javascript ===  */
//**TODO === === === cONST & Variable === === ===  */
const canvas = document.querySelector(`#game`);
const gameCTX = canvas.getContext(`2d`);
const btnRight = document.querySelector("#right");
const btnLeft = document.querySelector("#left");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
let canvasSize;
let elementSize;
let map;
let rowMap;
let colMap;

//*! === === === === CODE === === === === */

const setCanvasSize = () => {
  window.innerHeight > window.innerWidth
    ? (canvasSize = window.innerWidth * 0.8)
    : (canvasSize = window.innerHeight * 0.8);

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;

  startGame();
};

const startGame = () => {
  gameCTX.font = elementSize + "px Arial";
  gameCTX.textAlign = "end";

  map = maps[0];
  rowMap = map.trim().split("\n");
  colMap = rowMap.map((row) => row.trim().split(""));
  console.log({ map, rowMap, colMap });

  // === Method ==
  colMap.forEach((row, rowInd) => {
    row.forEach((col, colInd) => {
      //console.log({ row, col, rowInd, colInd });
      const emoji = emojis[col];
      //console.log(emoji);
      const posX = elementSize * (rowInd + 1);
      const posY = elementSize * (colInd + 1);
      gameCTX.fillText(emoji, posY, posX);
    });
  });
  // === Cic For ===
  /* for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      gameCTX.fillText(
        emojis[colMap[row - 1][col - 1]],
        elementSize * col,
        elementSize * row
      );
    }
  } */
};

const eventClick = (e) => {
  console.log(e);
  e.key === "ArrowUp" ? upOn() : console.log("Error");
};

const upOn = () => {
  console.log("UpOn!");
};
btnUp.addEventListener("click", upOn);

const leftOn = () => {};
btnLeft.addEventListener("click", leftOn);

const rightOn = () => {};
btnRight.addEventListener("click", rightOn);

const downOn = () => {};
btnDown.addEventListener("click", downOn);
//*? === === === Load Window === === ===  */
window.addEventListener("resize", setCanvasSize);
window.addEventListener("load", setCanvasSize);
window.addEventListener("keydown", eventClick);
