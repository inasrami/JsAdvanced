function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const [input, output] = document.querySelectorAll('textarea');
  const tableBodyRef = document.querySelector("table tbody");

  generateBtn.addEventListener("click", onGenerate);
  buyBtn.addEventListener("click", onGenerateOrder);

  function onGenerate(e){
    const data = JSON.parse(input.value);

    for (let el of data) {
      const tr = createTableRow(el);
      tableBodyRef.appendChild(tr);
    }
  }

  function createTableRow(obj){
    const tr = document.createElement('tr');
    const tdImg = document.createElement('td');
    const img = document.createElement('img');
    img.src = obj.img;
    tdImg.appendChild(img);
    tr.appendChild(tdImg);
    
    const tdName = document.createElement('td');
    const pName = document.createElement('p');
    pName.textContent = obj.name;
    tdName.appendChild(pName);
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    const pPrice = document.createElement('p');
    pPrice.textContent = obj.price;
    tdPrice.appendChild(pPrice);
    tr.appendChild(tdPrice);

    const tdDecF = document.createElement('td');
    const pDecF = document.createElement('p');
    pDecF.textContent = obj.decFactor;
    tdDecF.appendChild(pDecF);
    tr.appendChild(tdDecF);

    const tdCheck = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'checkbox';
    
    tdCheck.appendChild(input);
    tr.appendChild(tdCheck);

    return tr;
  }

  function onGenerateOrder(e){
    const selectItems = document.querySelectorAll("input[type='checkbox']:checked");
    const names = [];
    let price = 0;
    let sumDecFac = 0;

    for(let item of selectItems){
      const tr = item.parentElement.parentElement;
      const [imgTd, nameTd, priceTd, decFactorTd] = tr.children; 
      const name = nameTd.children[0].textContent;
      const itemPrice = Number(priceTd.children[0].textContent);
      const decF = Number(decFactorTd.children[0].textContent);

      names.push(name);
      price += itemPrice;
      sumDecFac += decF;
    }
    
    let buff = `Bought furniture: ${names.join(", ")}\n`; 
    buff += `Total price: ${price.toFixed(2)}\n`; 
    buff += `Average decoration factor: ${sumDecFac / names.length}`;

    output.value = buff;
  }
}