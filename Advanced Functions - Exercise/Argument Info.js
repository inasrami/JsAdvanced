function ArgumentInfo(...args){
    const result = {};
    const order = []; 
    for(let el of args) {
        let type = typeof el;
        console.log(`${type}: ${el}`);

        if(!result.hasOwnProperty(type)){
            result[type] = 0;
            order.push(type); 
        }

        result[type] += 1;
    }
    
    const resultArr = Object.entries(result);
    
    resultArr.sort(([keyA, valueA], [keyB, valueB]) => {
        if(valueB !== valueA) {
            return valueB - valueA; 
        }
        return order.indexOf(keyA) - order.indexOf(keyB); 
    });

    for(let [type, count] of resultArr){
        console.log(`${type} = ${count}`);
    }
}