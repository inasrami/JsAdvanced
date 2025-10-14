function BreakfastRobot() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function(instruction) {
        const tokens = instruction.split(" ");
        const command = tokens[0];

        if (command === "restock") {
            const microelement = tokens[1];
            const quantity = Number(tokens[2]);
            ingredients[microelement] += quantity;
            return "Success";
        } else if (command === "prepare") {
            const recipe = tokens[1];
            const quantity = Number(tokens[2]);
            const required = recipes[recipe];

            for (let ingredient in required) {
                const needed = required[ingredient] * quantity;
                if (ingredients[ingredient] < needed) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in required) {
                ingredients[ingredient] -= required[ingredient] * quantity;
            }

            return "Success";
        } else if (command === "report") {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    };
}