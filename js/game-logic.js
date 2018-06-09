// All code should be written in this file.
let playerOneMoveOneType,
  playerOneMoveOneValue,
  playerOneMoveTwoType,
  playerOneMoveTwoValue,
  playerOneMoveThreeType,
  playerOneMoveThreeValue,
  playerTwoMoveOneType,
  playerTwoMoveOneValue,
  playerTwoMoveTwoType,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeType,
  playerTwoMoveThreeValue,
  playerOneWins,
  playerTwoWins;

const setPlayerMoves = (
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) => {
  const parameters = [
    player,
    moveOneType,
    moveOneValue,
    moveTwoType,
    moveTwoValue,
    moveThreeType,
    moveThreeValue
  ];

  if (parameters.includes(undefined)) {
    return;
  }

  if (parameters.some(x => x < 1 || x > 99)) {
    return;
  }

  if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
    return;
  }

  if (
    ![moveOneType, moveTwoType, moveThreeType].every(
      x => x === 'rock' || x === 'paper' || x === 'scissors'
    )
  ) {
    return;
  }

  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  } else {
    return;
  }
};

const getRoundWinner = roundNumber => {
  const playerOne = 'Player One';
  const playerTwo = 'Player Two';
  let playerOneMoveType;
  let playerOneMoveValue;
  let playerTwoMoveType;
  let playerTwoMoveValue;

  switch (roundNumber) {
    case 1:
      playerOneMoveType = playerOneMoveOneType;
      playerOneMoveValue = playerOneMoveOneValue;
      playerTwoMoveType = playerTwoMoveOneType;
      playerTwoMoveValue = playerTwoMoveOneValue;
      break;
    case 2:
      playerOneMoveType = playerOneMoveTwoType;
      playerOneMoveValue = playerOneMoveTwoValue;
      playerTwoMoveType = playerTwoMoveTwoType;
      playerTwoMoveValue = playerTwoMoveTwoValue;
      break;

    case 3:
      playerOneMoveType = playerOneMoveThreeType;
      playerOneMoveValue = playerOneMoveThreeValue;
      playerTwoMoveType = playerTwoMoveThreeType;
      playerTwoMoveValue = playerTwoMoveThreeValue;
      break;
    default:
      return null;
      break;
  }

  if (
    !playerOneMoveType ||
    !playerOneMoveValue ||
    !playerTwoMoveType ||
    !playerTwoMoveValue
  ) {
    return null;
  }

  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return playerOne;
    } else if (playerOneMoveValue === playerTwoMoveValue) {
      return 'Tie';
    } else {
      return playerTwo;
    }
  }

  if (playerOneMoveType === 'rock') {
    if (playerTwoMoveType === 'paper') {
      return playerTwo;
    } else {
      return playerOne;
    }
  }

  if (playerOneMoveType === 'paper') {
    if (playerTwoMoveType === 'scissors') {
      return playerTwo;
    } else {
      return playerOne;
    }
  }

  if (playerOneMoveType === 'scissors') {
    if (playerTwoMoveType === 'rock') {
      return playerTwo;
    } else {
      return playerOne;
    }
  }
};

const getGameWinner = () => {
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }

  playerOneWins = 0;
  playerTwoWins = 0;
  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);

  if (playerOneWins === playerTwoWins) {
    return 'Tie';
  } else if (playerOneWins > playerTwoWins) {
    return 'Player One';
  } else {
    return 'Player Two';
  }
};

const addWin = winner => {
  if (winner === 'Player One') {
    playerOneWins++;
  }
  if (winner === 'Player Two') {
    playerTwoWins++;
  }
};

const setComputerMoves = () => {
  const moveOneType = setMoveType();
  const moveTwoType = setMoveType();
  const moveThreeType = setMoveType();
  const moveOneValue = Math.floor(Math.random() * 96) + 1;
  const moveTwoValue = Math.floor(Math.random() * (97 - moveOneValue)) + 1;
  const moveThreeValue = 99 - moveOneValue - moveTwoValue;

  setPlayerMoves(
    'Player Two',
    moveOneType,
    moveOneValue,
    moveTwoType,
    moveTwoValue,
    moveThreeType,
    moveThreeValue
  );
};

const setMoveType = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
