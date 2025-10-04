function LowestPricesInCities(data) {
  const result = {};

  for (let el of data) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);

    if (!result.hasOwnProperty(product)) {
      result[product] = { town: town, price: price };
    }

    if (price < result[product].price) {
      result[product] = { town, price };
    }
  }

  for (let [product, productInfo] of Object.entries(result)) {
    console.log(`${product} -> ${productInfo.price} (${productInfo.town})`);
  }
}

LowestPricesInCities([
  "Sample Town | Sample Product | 1000",

  "Sample Town | Orange | 2",

  "Sample Town | Peach | 1",

  "Sofia | Orange | 3",

  "Sofia | Peach | 2",

  "New York | Sample Product | 1000.1",

  "New York | Burger | 10",
]);
