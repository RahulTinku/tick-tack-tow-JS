// const button = document.querySelector('div');
// let input;
// let counter = 1;
// const player1 = [];
// const player2 = [];
// const winArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];
// const filledArray = [];
// let element;
// button.addEventListener('click', (event) => {
//   element = document.getElementById(event.target.id);

//   if (counter % 2 !== 0 && filledArray.length < 9) {
//     player1Fill(event.target.id);
//   } else {
//     player2Fill(event.target.id);
//   }
//   filledArray.push(event.target.id);
//   handleValidation();

//   // if (input === '0') {
//   //   element.innerHTML = 'X';
//   //   input = 'X';
//   // } else if (input === 'X') {
//   //   element.innerHTML = '0';
//   //   input = '0';
//   // } else {
//   //   element.innerHTML = '0';
//   //   input = '0';
//   // }
//   counter++;

//   console.log('filledArray ', filledArray);
//   console.log('player1 ', player1);
//   console.log('player2 ', player2);
// });

// player1Fill = (id) => {
//   element.innerHTML = '0';
//   player1.push(id);
// };
// player2Fill = (id) => {
//   element.innerHTML = 'X';
//   player2.push(id);
// };

// handleValidation = () => {
//   let roundWon = false;
//   for (let i = 0; i < winArray.length; i++) {
//     const winningCondition = winArray[i];
//     const a = filledArray[winningCondition[0]];
//     const b = filledArray[winningCondition[1]];
//     const c = filledArray[winningCondition[2]];

//     if (a === '' && (b === '') & (c === '')) {
//       continue;
//     }
//     if (a === b && b === c) {
//       roundWon = true;
//       break;
//     }
//   }
//   alert(' you won');
// };

const boxes = Array.from(document.getElementsByClassName('box'));

const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartButton');
const spaces = [];
const O_Text = 'O';
const X_Text = 'X';
let currentPlayer;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = '';
    if (index < 3) {
      styleString += `border-bottom : 3px solid var(--purple);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right : 3px solid var(--purple);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left : 3px solid var(--purple);`;
    }
    if (index > 5) {
      styleString += `border-top : 3px solid var(--purple);`;
    }
    box.style = styleString;
    box.addEventListener('click', boxClicked);
  });
};

boxClicked = (event) => {
  const id = event.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    event.target.innerText = currentPlayer;
    if (playerHasOwn()) {
      playText.innerText = `${currentPlayer} has Won`;
      return;
    }
    currentPlayer = currentPlayer === O_Text ? X_Text : O_Text;
  }
};

playerHasOwn = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins left`);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonaly`);
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the Right`);
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins vertically in the middle`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins horizontally in middle`);
      return true;
    }
  }
};

const restart = () => {
  spaces.forEach((item, index) => (spaces[index] = null));
  boxes.forEach((box) => (box.innerText = ''));
  playText.innerText = `Let's Play`;
  currentPlayer = O_Text;
};

restartBtn.addEventListener('click', restart);

restart();
drawBoard();
