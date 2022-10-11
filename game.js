//*TODO === === === Games === === === === */
const canvas = document.querySelector(`#game`);
const gameCtx = canvas.getContext("2d");
const btnUp = document.querySelector("#up");
const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const btnDown = document.querySelector("#down");
let canvasSize;
let elementSize;
let map;
let rowsMap;
let colsMap;

//*! === Example === */
/* const startGame = () => {
  gameCtx.fillRect(0, 0, 100, 100);
  gameCtx.clearRect(50, 50, 50, 50);
  gameCtx.font = `25px Verdana`;
  gameCtx.fillStyle = "purple";
  gameCtx.fillText("Platzi", 50, 50);
};
 */

//*! Responsive */
/* const responsive = () => {
  if (window.innerHeight < 768 || window.innerHeight < 1024) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
}; */

//** ===  === === CANVAS === === === */

//** === SetCanvasSizes */
const SetCanvasSizes = () => {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("Width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;

  startGame();
};

//** === Start Game */
const startGame = () => {
  console.log({ canvasSize, elementSize });

  gameCtx.font = `${elementSize}px Verdana`;
  gameCtx.textAlign = "end";

  map = maps[0];
  rowsMap = map.trim().split("\n");
  colsMap = rowsMap.map((row) => row.trim().split(``));
  console.log({ map, rowsMap, colsMap });

  // 1) == Method 01 CicFor ===
  /*  for (let i = 1; i <= 10; i++) {
    
    for (let j = 1; j <= 10; j++) {
      gameCtx.fillText(
        emojis[colsMap[i - 1][j - 1]],
        elementSize * j,
        elementSize * i
      );
      
    }
  } */
  // ===  2) Method Array Array ===
  colsMap.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);

      gameCtx.fillText(emoji, posX, posY);
      //console.log({ row,rowIndex,  col, colIndex });
    });
  });
};
//*! i ==> ROW / J ==> Col */

//** === ===  Event Buttons === === */
window.addEventListener("keydown", moveByKeys);

function moveByKeys(e) {
  console.log(e);
}

function moveUp() {
  console.log("Top");
}
btnUp.addEventListener("mouseup", moveUp);

function moveLeft() {
  console.log("Left");
}
btnLeft.addEventListener(`click`, moveLeft);

function moveRight() {
  console.log("Right");
}
btnRight.addEventListener("click", moveRight);

function moveDown() {
  console.log("Down");
}
btnDown.addEventListener("click", moveDown);

//** === Windows Load & Size === */
window.addEventListener("load", SetCanvasSizes);
window.addEventListener("resize", SetCanvasSizes);
