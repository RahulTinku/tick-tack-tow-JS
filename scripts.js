const button = document.querySelector('div');
let input;
let counter = 1;
const player1 = [];
const player2 = [];
const winArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const filledArray = [];
let element;
button.addEventListener('click', (event) => {
  element = document.getElementById(event.target.id);

  if (counter % 2 !== 0 && filledArray.length < 9) {
    player1Fill(event.target.id);
  } else {
    player2Fill(event.target.id);
  }
  filledArray.push(event.target.id);
  handleValidation();

  // if (input === '0') {
  //   element.innerHTML = 'X';
  //   input = 'X';
  // } else if (input === 'X') {
  //   element.innerHTML = '0';
  //   input = '0';
  // } else {
  //   element.innerHTML = '0';
  //   input = '0';
  // }
  counter++;

  console.log('filledArray ', filledArray);
  console.log('player1 ', player1);
  console.log('player2 ', player2);
});

player1Fill = (id) => {
  element.innerHTML = '0';
  player1.push(id);
};
player2Fill = (id) => {
  element.innerHTML = 'X';
  player2.push(id);
};

handleValidation = () => {
  let roundWon = false;
  for (let i = 0; i < winArray.length; i++) {
    const winningCondition = winArray[i];
    const a = filledArray[winningCondition[0]];
    const b = filledArray[winningCondition[1]];
    const c = filledArray[winningCondition[2]];

    if (a === '' && (b === '') & (c === '')) {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  alert(' you won');
};
