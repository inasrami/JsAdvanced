function BiggestElement(array1){
    let max = -Infinity;
    for (let row of array1) {
        for (let value of row) {
            if (value > max) max = value;
        }
    }
    return max;
}