//** === Video Game Javascript ===  */
//**TODO === === === cONST & Variable === === ===  */
const canvas = document.querySelector(`#game`);
const gameCTX = canvas.getContext(`2d`);
let canvasSize;
let elementSize;

//*! === === === === CODE === === === === */
const startGame = () => {
  window.innerHeight > window.innerWidth
    ? (canvasSize = window.innerWidth * 0.8)
    : (canvasSize = window.innerHeight * 0.8);

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;

  gameCTX.font = elementSize + "px Arial";
  gameCTX.textAlign = "end";
  /*  for (let i = 1; i <= 10; i++) {
} */
  gameCTX.fillText(emojis["X"], elementSize, elementSize);
};

//*? === === === Load Window === === ===  */
window.addEventListener("load", startGame);
