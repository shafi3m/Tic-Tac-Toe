// // Select elements from the DOM
// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector("#reset");
// let newGameBtn = document.querySelector("#new-btn");
// let playComputerBtn = document.querySelector("#play-computer");
// let playFriendBtn = document.querySelector("#play-friend");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let turnInfo = document.querySelector("#turn-info");

// let turnO = true; // True if Player X's turn, false if Player O's turn
// let count = 0; // Number of moves made
// let isComputerTurn = false; // True if it's the computer's turn
// let playWithComputer = false; // True if the game is against the computer
// let lastWinner = ""; // Stores the last winner ("X" or "O")

// // Reset the game to its initial state
// const resetGame = () => {
//   count = 0;
//   enableBox();
//   msgContainer.classList.add("hide");

//   // Set the turn based on the last winner
//   if (playWithComputer) {
//     turnO = lastWinner === "O" ? false : true; // If last winner was O, next turn is X, else O
//     isComputerTurn = !turnO; // Computer's turn if it's O's turn
//   } else {
//     turnO = lastWinner === "X" ? true : false; // Maintain the turn of the last winner if playing with friend
//     isComputerTurn = false;
//   }

//   updateTurnInfo();

//   // If it's the computer's turn, make a move after a short delay
//   if (isComputerTurn) {
//     setTimeout(computerMove, 500); // Delay for better UX
//   }
// };

// // Winning patterns for Tic-Tac-Toe
// const winPattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// // Add event listeners to each box
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (!isComputerTurn && box.innerText === "") {
//       // Only proceed if the box is empty and it's not computer's turn
//       playerMove(box);
//       let isWinner = checkWinner();
//       if (isWinner || count === 9) {
//         // If there's a winner or board is full
//         return; // Stop further moves
//       }
//       if (playWithComputer) {
//         isComputerTurn = true;
//         setTimeout(computerMove, 500); // Delay for better UX
//       }
//     }
//   });
// });

// // Handle a player's move
// const playerMove = (box) => {
//   if (box.innerText === "" && !isComputerTurn) {
//     // Ensure box is empty and it's not computer's turn
//     box.innerText = turnO ? "X" : "O";
//     box.disabled = true;
//     count++;
//     updateTurnInfo();
//     let isWinner = checkWinner();
//     if (isWinner) {
//       return;
//     }
//     if (count === 9) {
//       // Check for draw if board is full
//       gameDraw();
//     } else {
//       turnO = !turnO; // Switch turn
//     }
//   }
// };

// // Handle the computer's move
// const computerMove = () => {
//   if (playWithComputer && isComputerTurn) {
//     let availableBoxes = Array.from(boxes).filter(
//       (box) => box.innerText === ""
//     );
//     if (availableBoxes.length > 0) {
//       let randomBox =
//         availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
//       randomBox.innerText = "O";
//       randomBox.disabled = true;
//       count++;
//       updateTurnInfo();
//       let isWinner = checkWinner();
//       if (isWinner) {
//         return;
//       }
//       if (count === 9) {
//         // Check for draw if board is full
//         gameDraw();
//       } else {
//         turnO = true; // Player X's turn after computer
//         isComputerTurn = false;
//       }
//     }
//   }
// };

// // Handle a draw situation
// const gameDraw = () => {
//   msg.innerText = `Game was a draw`;
//   msgContainer.classList.remove("hide");
//   disableBox();
//   lastWinner = ""; // Reset last winner on draw
// };

// // Disable all boxes (make them unclickable)
// const disableBox = () => {
//   boxes.forEach((box) => (box.disabled = true));
// };

// // Enable all boxes (make them clickable again)
// const enableBox = () => {
//   boxes.forEach((box) => {
//     box.disabled = false;
//     box.innerText = "";
//   });
// };

// // Show the winner message and disable all boxes
// const showwinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBox();
//   lastWinner = winner; // Store the last winner to determine the next turn
// };

// // Check if there's a winner
// const checkWinner = () => {
//   for (let pattern of winPattern) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showwinner(pos1Val);
//         return true;
//       }
//     }
//   }
//   return false; // No winner found
// };

// // Update the turn information display
// const updateTurnInfo = () => {
//   turnInfo.innerText = `Turn: Player ${turnO ? "X" : "O"}`;
// };

// // Event listeners for game mode buttons
// playComputerBtn.addEventListener("click", () => {
//   playWithComputer = true;
//   playComputerBtn.classList.add("hide");
//   playFriendBtn.classList.remove("hide");
//   resetGame();
// });

// playFriendBtn.addEventListener("click", () => {
//   playWithComputer = false;
//   playFriendBtn.classList.add("hide");
//   playComputerBtn.classList.remove("hide");
//   resetGame();
// });

// // Event listeners for reset and new game buttons
// newGameBtn.addEventListener("click", resetGame);
// reset.addEventListener("click", resetGame);

// // Initialize turn info at the start
// updateTurnInfo();

// Select elements from the DOM
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let playComputerBtn = document.querySelector("#play-computer");
let playFriendBtn = document.querySelector("#play-friend");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnInfo = document.querySelector("#turn-info");

// Initialize game variables
let turnO = true; // true means Player X's turn, false means Player O's turn
let count = 0; // Count of moves
let isComputerTurn = false; // To track if it's computer's turn
let playWithComputer = false; // Flag to check if playing with computer
let lastWinner = "X"; // Track the last game's winner

// Function to reset the game state
const resetGame = () => {
  turnO = lastWinner === "X"; // Start with the last game's winner
  count = 0;
  isComputerTurn = false;
  enableBox(); // Re-enable all boxes
  msgContainer.classList.add("hide"); // Hide message container
  updateTurnInfo(); // Update the turn display
  if (playWithComputer && !turnO) {
    // If playing with computer and it's O's turn
    isComputerTurn = true;
    setTimeout(computerMove, 500); // Computer moves after a short delay
  }
};

// Define winning patterns
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Event listeners for player moves
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!isComputerTurn) {
      playerMove(box);
      let isWinner = checkWinner();
      if (playWithComputer && !isWinner && count < 9) {
        isComputerTurn = true;
        setTimeout(computerMove, 500); // Delay for better UX
      }
    }
  });
});

// Function to handle player's move
const playerMove = (box) => {
  box.innerText = turnO ? "X" : "O";
  box.disabled = true;
  count++;
  turnO = !turnO; // Switch turns
  updateTurnInfo(); // Update the turn display
};

// Function for computer's move
const computerMove = () => {
  let availableBoxes = Array.from(boxes).filter((box) => box.innerText === "");
  if (availableBoxes.length > 0) {
    let randomBox =
      availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
    randomBox.innerText = "O";
    randomBox.disabled = true;
    count++;
    let isWinner = checkWinner();
    turnO = true; // Player X's turn after computer
    isComputerTurn = false;
    updateTurnInfo(); // Update the turn display
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  }
};

// Function to handle a draw game
const gameDraw = () => {
  msg.innerText = `Game was a draw`;
  msgContainer.classList.remove("hide");
  disableBox();
};

// Function to disable all boxes
const disableBox = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Function to enable all boxes
const enableBox = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

// Function to display the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
  lastWinner = winner; // Track the last winner
};

// Function to check if there is a winner
const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
  if (count === 9) {
    gameDraw(); // Handle draw condition
  }
  return false;
};

// Function to update the displayed turn information
const updateTurnInfo = () => {
  turnInfo.innerText = `Turn: Player ${turnO ? "X" : "O"}`;
};

// Event listener for "Play with Computer" button
playComputerBtn.addEventListener("click", () => {
  playWithComputer = true;
  playComputerBtn.classList.add("hide");
  playFriendBtn.classList.remove("hide");
  resetGame();
});

// Event listener for "Play with Friend" button
playFriendBtn.addEventListener("click", () => {
  playWithComputer = false;
  playFriendBtn.classList.add("hide");
  playComputerBtn.classList.remove("hide");
  resetGame();
});

// Event listeners for reset and new game buttons
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

// Initialize the turn display at the start
updateTurnInfo();
