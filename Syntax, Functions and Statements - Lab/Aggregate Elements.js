function AggregateElements(arr){
    
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log(sum);

   
    let inverseSum = 0;
    for (let num of arr) {
        inverseSum += 1 / num;
    }
    console.log(inverseSum);

    
    let concat = "";
    for (let num of arr) {
        concat += num;
    }
    console.log(concat);
}
AggregateElements([1, 2, 3])