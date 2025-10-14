function getFibonator() {
    let prev = 0;
    let current = 1;

    return function() {
        let result = current;
        let next = prev + current;
        prev = current;
        current = next;
        
        return result;
    }
}