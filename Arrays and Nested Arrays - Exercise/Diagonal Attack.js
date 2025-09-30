function DiagonalAttack(input){
    const matrix = input.map(row => row.split(' ').map(Number));
    const n = matrix.length;

    let sumPrimary = 0;
    let sumSecondary = 0;
    for (let i = 0; i < n; i++) {
        sumPrimary += matrix[i][i];
        sumSecondary += matrix[i][n - 1 - i];
    }

    if (sumPrimary === sumSecondary) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j !== i && j !== n - 1 - i) {
                    matrix[i][j] = sumPrimary;
                }
            }
        }
    }

    for (let row of matrix) {
        console.log(row.join(' '));
    }
}
DiagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

DiagonalAttack(['1 1 1', '1 1 1', '1 1 0']);