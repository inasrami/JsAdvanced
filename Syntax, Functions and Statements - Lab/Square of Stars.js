function SquareOfStars(size = 5){
     for (let i = 0; i < size; i++) {
        console.log('* '.repeat(size).trim());
    }
}
SquareOfStars(100)