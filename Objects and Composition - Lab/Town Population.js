function TownPopulation(arr){
    let towns = {};
    for(let line of arr){
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if(towns[town] === undefined){
            towns[town] = 0;
        }
        towns[town] += population;
    }
    for(let town in towns){
        console.log(`${town} : ${towns[town]}`);
    }

}
TownPopulation(['Sofia <-> 1200000',
'Sofia <-> 1200000',
'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])