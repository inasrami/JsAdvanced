function RotateArray(arr, count){
    for(let i = 0; i < count; i++){
        // let currentElement = arr.pop();
        // arr.unshift(currentElement);
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
RotateArray(['1',

'2',

'3',

'4'],

2)