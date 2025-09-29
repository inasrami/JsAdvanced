function SmallestTwoNumbers(array){
    let result = [];
    let arraySorted = array.sort((a, b) => a - b);
    result.push(arraySorted[0], arraySorted[1])
    console.log(result.join(' '))
}
SmallestTwoNumbers([30, 15, 50, 5])