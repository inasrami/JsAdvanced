function BiggerHalf(array) {
    let arraySorted = array.slice().sort((a, b) => a - b); 
    let start = Math.floor(arraySorted.length / 2);
    let result = arraySorted.slice(start);
    return result; 
}
BiggerHalf([4, 7, 2, 5])