function ListOfNames(arr){
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    for(let i = 0; i < sorted.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
ListOfNames(["John",

"Bob",

"Christina",

"Ema"])