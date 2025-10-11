function solve() {
    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const checkDiv = document.getElementById('check');
    const messageP = checkDiv.querySelector('p');

    checkBtn.addEventListener('click', checkSudoku);
    clearBtn.addEventListener('click', clearSudoku);

    function checkSudoku() {
        const rows = document.querySelectorAll('tbody tr');
        const size = rows.length; 
        const blockSize = Math.sqrt(size); 
        let isValid = true;

        const grid = [];
        for (let row of rows) {
            const inputs = row.querySelectorAll('input');
            const rowValues = [];
            for (let input of inputs) {
                const value = Number(input.value);
                if (!value || value < 1 || value > size) {
                    isValid = false;
                    break;
                }
                rowValues.push(value);
            }
            grid.push(rowValues);
            if (!isValid) break;
        }

        if (isValid) {
            for (let row of grid) {
                if (!isValidSet(row, size)) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                for (let col = 0; col < size; col++) {
                    const column = [];
                    for (let row = 0; row < size; row++) {
                        column.push(grid[row][col]);
                    }
                    if (!isValidSet(column, size)) {
                        isValid = false;
                        break;
                    }
                }
            }

            if (isValid && blockSize === Math.floor(blockSize)) {
                for (let blockRow = 0; blockRow < blockSize; blockRow++) {
                    for (let blockCol = 0; blockCol < blockSize; blockCol++) {
                        const block = [];
                        for (let row = 0; row < blockSize; row++) {
                            for (let col = 0; col < blockSize; col++) {
                                block.push(grid[blockRow * blockSize + row][blockCol * blockSize + col]);
                            }
                        }
                        if (!isValidSet(block, size)) {
                            isValid = false;
                            break;
                        }
                    }
                    if (!isValid) break;
                }
            }
        }

        if (isValid) {
            table.style.border = '2px solid green';
            messageP.textContent = 'You solve it! Congratulations!';
            messageP.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            messageP.textContent = 'NOP! You are not done yet...';
            messageP.style.color = 'red';
        }
    }

    function isValidSet(arr, size) {
        const sorted = arr.slice().sort((a, b) => a - b);
        for (let i = 0; i < size; i++) {
            if (sorted[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }

    function clearSudoku() {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        table.style.border = '';
        messageP.textContent = '';
        messageP.style.color = '';
    }
}