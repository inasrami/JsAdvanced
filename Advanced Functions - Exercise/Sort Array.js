function SortArray(arr, op){
    if (op === "asc") {
        return arr.sort((a, b) => a - b);
    } else {
        return arr.sort((a, b) => b - a);
    }
}
console.log(SortArray([14, 7, 17, 6, 8], 'asc'))