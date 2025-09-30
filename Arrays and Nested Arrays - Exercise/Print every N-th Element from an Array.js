function PrintEveryNthElementFromAnArray(arr, n){
    let array = [];
    for(let i = 0; i < arr.length; i += n){
        array.push(arr[i]);
    }
    return array;
}
PrintEveryNthElementFromAnArray(['5',

'20',

'31',

'4',

'20'],

2)