function heroRegister(input) {
  const heroes = [];

  for (let line of input) {
    if (!line) continue;

    let [name, level, items] = line.split(" / ");

    level = Number(level);
    items = items ? items.split(", ").map((i) => i.trim()) : [];

    const hero = {
      name,
      level,
      items,
    };

    heroes.push(hero);
  }

  return JSON.stringify(heroes);
}

HeroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest,DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
