function SameNumbers(num){
    let numAsString = num.toString();
    let firstNum = numAsString[0];
    let isSame = true;

    let sum = Number(firstNum);
    for(let i = 1; i < numAsString.length; i++){
        sum += Number(numAsString[i]);
        if(firstNum !== numAsString[i]){
            isSame = false; 
        }
    }

    console.log(isSame); 
    console.log(sum);    
}

SameNumbers(2222222); 
SameNumbers(1234);    
