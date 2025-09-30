function SortingNumbers(arr){
    let sorted = arr.slice().sort((a, b) => a - b);
    let result = [];
    let half = Math.floor(sorted.length / 2);
    for (let i = 0; i < half; i++) {
        result.push(sorted[i]);
        result.push(sorted[sorted.length - 1 - i]);
    }
    if (sorted.length % 2 !== 0) {
        result.push(sorted[half]);
    }
    return result;
}
SortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])