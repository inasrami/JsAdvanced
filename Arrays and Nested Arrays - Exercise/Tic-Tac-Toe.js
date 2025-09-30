function TicTacToe(arr){
    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let player = 'X';

    for (let move of arr) {
        const [rStr, cStr] = move.split(' ');
        const r = Number(rStr);
        const c = Number(cStr);

        if (board[r][c] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue; 
        }

        board[r][c] = player;

        if (checkWin(board, player)) {
            console.log(`Player ${player} wins!`);
            printBoard(board);
            return;
        }

        if (!hasFreeCell(board)) {
            console.log("The game ended! Nobody wins :(");
            printBoard(board);
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function checkWin(b, p) {
        for (let i = 0; i < 3; i++) {
            if (b[i][0] === p && b[i][1] === p && b[i][2] === p) return true;
        }
        for (let i = 0; i < 3; i++) {
            if (b[0][i] === p && b[1][i] === p && b[2][i] === p) return true;
        }
        if (b[0][0] === p && b[1][1] === p && b[2][2] === p) return true;
        if (b[0][2] === p && b[1][1] === p && b[2][0] === p) return true;

        return false;
    }

    function hasFreeCell(b) {
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                if (b[r][c] === false) return true;
            }
        }
        return false;
    }

    function printBoard(b) {
        for (let r = 0; r < 3; r++) {
            console.log(b[r].join('\t'));
        }
    }
}
TicTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"])
