function PieceOfPie(array, startFlavour, endFlavour){
    let newArray = [];
    let startIndex = array.indexOf(startFlavour);
    let endIndex = array.indexOf(endFlavour);
    newArray = array.slice(startIndex, endIndex + 1);
    return newArray;
}
PieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')