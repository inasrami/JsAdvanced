function Fruit(type, gram, price){
    let kg = gram / 1000;
    let money = kg * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`)
}
Fruit('orange', 2500, 1.80)