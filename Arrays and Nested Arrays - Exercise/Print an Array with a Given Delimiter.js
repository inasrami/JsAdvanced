function PrintAnArrayWithAGivenDelimiter(array, delimiter){
    let arr = array.slice(", ");
    console.log(arr.join(delimiter));
}
PrintAnArrayWithAGivenDelimiter(['One',

'Two',

'Three',

'Four',

'Five'],

'-')