//*TODO === === === Games === === === === */
const canvas = document.querySelector(`#game`);
const gameCtx = canvas.getContext("2d");
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
  colsMap = rowsMap.map((i) => i.trim().split(""));
  console.log({ map, rowsMap, colsMap });

  for (let i = 1; i <= 10; i++) {
    //console.log(i);
    for (let j = 1; j <= 10; j++) {
      gameCtx.fillText(
        emojis[colsMap[i - 1][j - 1]],
        elementSize * j,
        elementSize * i
      );
      //console.log(emojis);
    }
  }
};
//** i ==> ROW / J ==> Col */

//*! === Windows */
window.addEventListener("load", SetCanvasSizes);
window.addEventListener("resize", SetCanvasSizes);
