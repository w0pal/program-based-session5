const board = [
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","R","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","K","*","*","*"],
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*"]
];

function findPositions(board) {
    let rowR = 0, columnR = 0, rowK = 0, columnK = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "R") {
                rowR = i;
                columnR = j;
            }
            if (board[i][j] === "K") {
                rowK = i;
                columnK = j;
            }
        }
    }

    return { rowR, columnR, rowK, columnK };
}

function checkRookAttack(board) {
    const { rowR, columnR, rowK, columnK } = findPositions(board);

    if (rowR === rowK || columnR === columnK) {
        return "Check";
    } else {
        return "King is safe";
    }
}

module.exports = { board, findPositions, checkRookAttack };

