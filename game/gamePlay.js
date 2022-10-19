//** === Video Game Javascript ===  */
//**TODO === === === cONST & Variable === === ===  */
const canvas = document.querySelector(`#game`);
const gameCTX = canvas.getContext(`2d`);
const btnRight = document.querySelector("#right");
const btnLeft = document.querySelector("#left");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
const playerPosition = {
  x: undefined,
  y: undefined,
};
let canvasSize;
let elementSize;
let map;
let rowMap;
let colMap;

//*! === === === === CODE === === === ===  === === === VideoGame === */

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

      if (col === "O") {
        playerPosition.x = posX;
        playerPosition.y = posY;
        console.log({ playerPosition });
      }

      gameCTX.fillText(emoji, posY, posX);
    });
  });
  gameCTX.fillText(emojis["PLAYER"], playerPosition.y, playerPosition.x);
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
  if (e.key === "ArrowUp") {
    moveUp();
  }
  if (e.key === "ArrowLeft") {
    moveLeft();
  }
  if (e.key === "ArrowRight") {
    moveRight();
  }
  if (e.key === "ArrowDown") {
    moveDown();
  }
};

const moveUp = () => {
  console.log("UpOn!");
};
btnUp.addEventListener("ArrowUp", moveUp);

const moveLeft = () => {
  console.log("Left");
};
btnLeft.addEventListener("click", moveLeft);

const moveRight = () => {
  console.log("Right");
};
btnRight.addEventListener("click", moveRight);

const moveDown = () => {
  console.log("Down");
};
btnDown.addEventListener("click", moveDown);
//*? === === === Load Window === === ===  */
window.addEventListener("resize", setCanvasSize);
window.addEventListener("load", setCanvasSize);
window.addEventListener("keydown", eventClick);
