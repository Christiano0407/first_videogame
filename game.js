//*TODO === === === Games === === === === */
const canvas = document.querySelector(`#game`);
const gameCtx = canvas.getContext("2d");
let canvasSize;
let elementSize;

//*! === Example === */
/* const startGame = () => {
  gameCtx.fillRect(0, 0, 100, 100);
  gameCtx.clearRect(50, 50, 50, 50);
  gameCtx.font = `25px Verdana`;
  gameCtx.fillStyle = "purple";
  gameCtx.fillText("Platzi", 50, 50);
};
 */

//** === CANVAS === */
const startGame = () => {
  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute("Width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;
  console.log({ canvasSize, elementSize });

  gameCtx.font = `${elementSize}px Verdana`;
  gameCtx.textAlign = "end";

  for (let i = 1; i <= 10; i++) {
    gameCtx.fillText(emojis["X"], elementSize * i, elementSize);
    gameCtx.fillText(emojis["X"], elementSize, elementSize * i);
  }
};
window.addEventListener("load", startGame);
