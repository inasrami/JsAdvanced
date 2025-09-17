function CircleArea(raduis){
    let type = typeof raduis;

    if(type != 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }else {
        let area = raduis ** 2 * Math.PI;
        console.log(area.toFixed(2))
    }
}
CircleArea(5)