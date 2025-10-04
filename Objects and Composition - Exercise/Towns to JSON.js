function TownsToJSON(data) {
  const result = [];

  const [headerA, headerB, headerC] = data
    .shift()
    .split(/\s?\|\s?/gm)
    .filter((el) => !!el);

  for (let el of data) {
    let [town, la, lo] = el.split(/\s?\|\s?/gm).filter((el) => !!el);
    const info = {};

    la = Number(la).toFixed(2);
    lo = Number(lo).toFixed(2);

    info[headerA] = town;
    info[headerB] = Number(la);
    info[headerC] = Number(lo);
    result.push(info);
  }
  return JSON.stringify(result);
}
TownsToJSON([
  "| Town | Latitude | Longitude |",

  "| Sofia | 42.696552 | 23.32601 |",

  "| Beijing | 39.913818 | 116.363625 |",
]);
