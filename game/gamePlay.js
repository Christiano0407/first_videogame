//** === Video Game Javascript ===  */
//**TODO === === === cONST & Variable === === ===  */
const canvas = document.querySelector(`#game`);
const gameCTX = canvas.getContext(`2d`);
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

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 10; col++) {
      gameCTX.fillText(
        emojis[colMap[row - 1][col - 1]],
        elementSize * col,
        elementSize * row
      );
    }
  }
};
//*? === === === Load Window === === ===  */
window.addEventListener("resize", setCanvasSize);
window.addEventListener("load", setCanvasSize);
