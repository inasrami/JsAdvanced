function CalorieObject(data) {
  const result = {};

  for (let i = 0; i < data.length; i += 2) {
    let key = data[i];
    let value = Number(data[i + 1]);

    result[key] = value;
  }
  console.log(result)
}
CalorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
