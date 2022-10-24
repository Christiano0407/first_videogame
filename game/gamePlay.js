//** === Video Game Javascript ===  */
//**TODO === === === CONST & Variable === === ===  */
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
const giftPosition = {
  x: undefined,
  y: undefined,
};
let canvasSize;
let elementSize;
let map;
let rowMap;
let colMap;
let collPosOnX;
let collPosOnY;
let bothCollPosition;
let enemiesPosition = [];
let enemiesCollision;
let level = 0;

//*TODO === === === === CODE === === === ===  === === === VideoGame === */

const setCanvasSize = () => {
  window.innerHeight > window.innerWidth
    ? (canvasSize = window.innerWidth * 0.8)
    : (canvasSize = window.innerHeight * 0.8);

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  elementSize = canvasSize / 10;

  startGame();
};
//*! === === === START GAME === === ===  */
const startGame = () => {
  gameCTX.font = elementSize + "px Arial";
  gameCTX.textAlign = "end";

  map = maps[level];
  if (!map) {
    gameFinished();
    return;
  }
  rowMap = map.trim().split("\n");
  colMap = rowMap.map((row) => row.trim().split(""));
  //console.log({ map, rowMap, colMap });

  enemiesPosition = [];
  gameCTX.clearRect(0, 0, canvasSize, canvasSize);
  // === Method ==
  colMap.forEach((row, rowInd) => {
    row.forEach((col, colInd) => {
      //console.log({ row, col, rowInd, colInd });

      const emoji = emojis[col];
      //console.log(emoji);
      const posX = elementSize * (colInd + 1);
      const posY = elementSize * (rowInd + 1);

      if (col === "O") {
        if (!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          // console.log({ playerPosition });
        }
      }
      //const positionPlayer = playerPosition.x + playerPosition.y;

      if (col === "I") {
        giftPosition.x = posX;
        giftPosition.y = posY;
        //console.log(giftPosition);
      }

      if (col === "X") {
        enemiesPosition.push({
          x: posX,
          y: posY,
        });
        //console.log(enemiesPosition);
      }

      gameCTX.fillText(emoji, posX, posY);
    });
  });
  movePlayer();
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

const youWin = () => {
  console.log("Your Win & Up Next Level");
  level++;
  startGame();
};

const gameFinished = () => {
  console.log("Winner!!");
};

const movePlayer = () => {
  gameCTX.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);

  collPosOnX = playerPosition.x.toFixed(3) === giftPosition.x.toFixed(3);
  collPosOnY = playerPosition.y.toFixed(3) === giftPosition.y.toFixed(3);

  bothCollPosition = collPosOnX && collPosOnY;
  bothCollPosition ? youWin() : console.log("Not Collision!");

  enemiesCollision = enemiesPosition.find((enemy) => {
    const enemiesCollisionX =
      enemy.x.toFixed(3) === playerPosition.x.toFixed(3);
    const enemiesCollisionY =
      enemy.y.toFixed(3) === playerPosition.y.toFixed(3);
    return enemiesCollisionX && enemiesCollisionY;
  });
  enemiesCollision ? console.log("Crash!!") : console.log("Not Crash!!");
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
  if (playerPosition.y - elementSize <= elementSize - 1) {
    console.log("Sorry!!");
  } else {
    playerPosition.y -= elementSize;
    startGame();
  }
};
btnUp.addEventListener("ArrowUp", moveUp);

const moveLeft = () => {
  console.log("Left");
  if (playerPosition.x - elementSize <= elementSize - 1) {
    console.log("sorry!");
  } else {
    playerPosition.x -= elementSize;
    startGame();
  }
};
btnLeft.addEventListener("click", moveLeft);

const moveRight = () => {
  console.log("Right");
  if (playerPosition.x + elementSize > canvasSize) {
    console.log("Sorry!!");
  } else {
    playerPosition.x += elementSize;
    startGame();
  }
};
btnRight.addEventListener("click", moveRight);

const moveDown = () => {
  console.log("Down");
  if (playerPosition.y + elementSize > canvasSize) {
    console.log("Sorry!");
  } else {
    playerPosition.y += elementSize;
    startGame();
  }
};
btnDown.addEventListener("click", moveDown);

//*! === === === Load Window === === ===  */
window.addEventListener("resize", setCanvasSize);
window.addEventListener("load", setCanvasSize);
window.addEventListener("keydown", eventClick);
