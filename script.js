let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("span");
let dMsg = document.querySelector("p");
let gameContainer = document.querySelector("main");
let turnO = true;

let count = 0;

const resetGame = () => {
  count = 0;
  turnO = true;
  enableBoxes();
  gameContainer.classList.remove("hide");
  msgContainer.classList.add("hide");
};

let winChance = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let btn of boxes) {
    btn.disabled = true;
  }
};
const enableBoxes = () => {
  for (let btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
  }
};

let showWinnwrMsg = (winner) => {
  msg.innerText = `${winner}`;
  msgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  disableBoxes();
};

let checkWinner = () => {
  count++;
  console.log(count);
  for (chance of winChance) {
    let posVal1 = boxes[chance[0]].innerText;
    let posVal2 = boxes[chance[1]].innerText;
    let posVal3 = boxes[chance[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        console.log("winner", posVal1);
        showWinnwrMsg(posVal1);
      } else if (count === 9) {
        console.log("game is draw");
        dMsg.innerText = "Your Game is Draw. Please Play The Game Again - ";
        msgContainer.classList.remove("hide");
      }
    }
  }
};

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      btn.innerText = "o";
      btn.style.color = "green";
      turnO = false;
    } else {
      btn.innerText = "x";
      btn.style.color = "blue";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
    // gameDraw();
  });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
