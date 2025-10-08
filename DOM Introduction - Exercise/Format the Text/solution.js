function solve() {
  const input = document.getElementById("input").value;
  const outputRef = document.getElementById("output");

  const text = input.split(".").filter(x => !!x);

  for(let i = 0; i < text.length; i += 3){
    let result = [];
    for( let x = 0; x < 3; x++){
      if (!text[x + i]){
        break;
      }
      result.push(text[i + x])
    }
    let buff = result.join(".") + "."
    outputRef.innerHTML += `<p>${buff.trim()}</p>`
  }
}