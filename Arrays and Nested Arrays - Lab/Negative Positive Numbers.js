function NegativePositiveNumbers(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        let num = Number(array[i]);
        if(num < 0){
            result.unshift(num)
        }else{
            result.push(num)
        }
    }
    console.log(result.join('\n'))
    
}
NegativePositiveNumbers(['7', '-2', '8', '9'])
