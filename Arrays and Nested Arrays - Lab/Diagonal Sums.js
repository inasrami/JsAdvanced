function DiagonalSums(array){
    let primarySum = 0;
    let secondarySum = 0;
    for(let i = 0; i < array.length; i++){
        primarySum += array[i][i];
        secondarySum += array[i][array.length - 1 - i];
    }
    console.log(primarySum + ' ' + secondarySum)
    
}
DiagonalSums([[20, 40], [10, 60]])