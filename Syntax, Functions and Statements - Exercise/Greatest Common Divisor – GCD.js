function Gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}
Gcd(15, 5)