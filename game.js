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

//*! === Position Player */
const playerOne = {
  x: undefined,
  y: undefined,
};

//*! === Position Gift */
const giftPosition = {
  x: undefined,
  y: undefined,
};

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
  gameCtx.font = `${elementSize}px Verdana`;
  gameCtx.textAlign = "end";

  map = maps[0];
  rowsMap = map.trim().split("\n");
  colsMap = rowsMap.map((row) => row.trim().split(``));

  // === Clear Canvas ===
  gameCtx.clearRect(0, 0, canvasSize, canvasSize);

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

      if (col === "O") {
        if (!playerOne.x && !playerOne.y) {
          console.log({ posX, posY });
          playerOne.x = posX;
          playerOne.y = posY;
          console.log(playerOne);
        }
      }

      if (col === "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
        console.log(giftPosition);
      }

      gameCtx.fillText(emoji, posX, posY);
      //console.log({ row,rowIndex,  col, colIndex });
    });
  });
  movePlayer();
};
//*! i ==> ROW / J ==> Col */

//** === Move Player */
const movePlayer = () => {
  const positionX = playerOne.x.toFixed(3) == giftPosition.x.toFixed(3);
  const positionY = playerOne.y.toFixed(3) == giftPosition.y.toFixed(3);
  const positionPlusCollision = positionX && positionY; // TRUE

  if (positionPlusCollision) {
    console.log("Collision! & Next Level");
  }

  gameCtx.fillText(emojis["PLAYER"], playerOne.x, playerOne.y);
};

//** === ===  Event Buttons & Move === === */
function moveByKeys(e) {
  console.log(e);

  if (e.key === "ArrowUp") {
    moveUp();
  }
  if (e.key === "ArrowRight") {
    moveRight();
  }
  if (e.key === "ArrowLeft") {
    moveLeft();
  }
  if (e.key === "ArrowDown") {
    moveDown();
  }
}

const moveUp = () => {
  console.log("Up");
  if (playerOne.y <= elementSize) {
    console.log("Not move Out Up");
  } else {
    playerOne.y -= elementSize;
    startGame();
  }
};
btnUp.addEventListener("click", moveUp);

const moveLeft = () => {
  console.log("Left");
  if (playerOne.x - elementSize < elementSize) {
    console.log("Not move Out Left");
  } else {
    playerOne.x -= elementSize;
    startGame();
  }
};
btnLeft.addEventListener(`click`, moveLeft);

const moveRight = () => {
  console.log("Right");
  if (playerOne.x + elementSize > canvasSize) {
    console.log("Not move Out Right");
  } else {
    playerOne.x += elementSize;
    startGame();
  }
};
btnRight.addEventListener("click", moveRight);

const moveDown = () => {
  console.log("Down");
  if (playerOne.y + elementSize > canvasSize) {
    console.log("Not move Out Down");
  } else {
    playerOne.y += elementSize;
    startGame();
  }
};
btnDown.addEventListener("click", moveDown);

//** === === === Windows Load & Size === === === */
window.addEventListener("load", SetCanvasSizes);
window.addEventListener("resize", SetCanvasSizes);
window.addEventListener("keydown", moveByKeys);
