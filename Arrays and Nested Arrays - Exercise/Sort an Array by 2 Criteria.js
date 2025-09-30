function SortAnArrayBy2Criteria(arr){
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\n'));
}
SortAnArrayBy2Criteria(['alpha',

'beta',

'gamma'])