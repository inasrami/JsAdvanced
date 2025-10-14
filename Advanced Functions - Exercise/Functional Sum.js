function FunctionalSum(num){
    let state = 0;
    sum(num);
    function sum(num) {
        state += num;
        return sum;
    }
    sum.toString = () => state;
    return sum;
}

console.log(add(5)(10)(15).toString())
