const gameState = {
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    winningCombonations: null,
    lastMove: null,
    playerXWins: 0,
    playerOWins: 0,
    draws: 0
};
console.log(gameState);

const winningCombos = [
    [0, 1, 2],  //top row
    [3, 4, 5],  //middle row
    [6, 7, 8], //bottom row
    [0, 3, 6], //left row
    [1, 4, 7], //middle vertical row
    [2, 5, 8], //right row
    [0, 4, 8], //diagonal top left to bottom right
    [2, 4, 6] //diagonal top right to bottom left
];

/*
const gameboard = {
    gameName: "Tic Tac Toe",
    grid: [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X']
    ],
    players: 2
};
console.log(gameboard.grid);


const playerName = {
    player1: "Player 1",
    player2: "Player 2"
};
console.log(playerName);
*/