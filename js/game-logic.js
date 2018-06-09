// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveOneValue;

let playerOneMoveTwoType;
let playerOneMoveTwoValue;

let playerOneMoveThreeType;
let playerOneMoveThreeValue;

let playerTwoMoveOneType;
let playerTwoMoveOneValue;

let playerTwoMoveTwoType;
let playerTwoMoveTwoValue;

let playerTwoMoveThreeType;
let playerTwoMoveThreeValue;

const setPlayerMoves = (
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) => {
    if (player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }
};

const getRoundWinner = (roundNumber) => {
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

    if(!playerOneMoveType ||!playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue ){
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType){
        if (playerOneMoveValue > playerTwoMoveValue){
            return playerOne;
        } else if (playerOneMoveValue === playerTwoMoveValue){
            return 'Tie';
        } else {
            return playerTwo;
        }
    }

    if (playerOneMoveType === 'rock') {
        if (playerTwoMoveType === 'paper'){
            return playerTwo;
        } else {
            return playerOne;
        }
    }

    if (playerOneMoveType === 'paper') {
        if (playerTwoMoveType === 'scissors'){
            return playerTwo;
        } else {
            return playerOne;
        }
    }

    if (playerOneMoveType === 'scissors') {
        if (playerTwoMoveType === 'rock'){
            return playerTwo;
        } else {
            return playerOne;
        }
    }

}

