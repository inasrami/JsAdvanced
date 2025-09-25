function CookingByNumbers(arg, ...params){
    
    let operation = {
        "chop": (num) => num / 2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => num + 1, 
        "bake": (num) => num * 3,
        "fillet": (num) => num * 0.80
    }

    let num = Number(arg);

    for(let op of params){
        num = operation[op](num);
        console.log(num);
    }
}
CookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')