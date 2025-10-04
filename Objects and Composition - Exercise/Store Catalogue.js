function StoreCatalogue(data) {
  const store = {};

  for (let el of data) {
    let [product, price] = el.split(" : ");
    let firstCh = product[0];

    if (!store.hasOwnProperty(firstCh)) {
      store[firstCh] = [];
    }

    store[firstCh].push({ product, price: Number(price) });
  }
  const sorted = Object.entries(store).sort((a, b) => a[0].localeCompare(b[0]));
  for (let [ch, products] of sorted) {
    console.log(ch);
    products.sort((a, b) => a.product.localeCompare(b.product));
    for (let p of products) {
      console.log(`  ${p.product}: ${p.price}`);
    }
  }
}
StoreCatalogue([
  "Appricot : 20.4",

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  "Anti-Bug Spray : 15",

  "T-Shirt : 10",
]);
