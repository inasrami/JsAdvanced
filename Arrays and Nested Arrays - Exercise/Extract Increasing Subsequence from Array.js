function ExtractIncreasingSubsequenceFromArray(arr){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= Math.max(...result) || result.length === 0){
            result.push(arr[i])
        }
    }
    return result;
        
}
ExtractIncreasingSubsequenceFromArray([1,

3,

8,

4,

10,

12,

3,

2,

24])