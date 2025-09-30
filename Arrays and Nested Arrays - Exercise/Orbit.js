function buildOrbits(input) {
    const [width, height, starRow, starCol] = input;

    let matrix = [];

    for (let i = 0; i < height; i++) {
        let row = [];
        for (let j = 0; j < width; j++) {
            const diff_i = Math.abs(i - starRow);
            const diff_j = Math.abs(j - starCol);

            const distance = Math.max(diff_i, diff_j);

            const value = distance + 1;

            row.push(value);
        }
        matrix.push(row);
    }

    const outputString = matrix
        .map(row => row.join(' '))
        .join('\n');

    return outputString;
}