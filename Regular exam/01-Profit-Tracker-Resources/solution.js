window.addEventListener("load", solve);

function solve() {
  const locationInput = document.getElementById("location");
  const areaInput = document.getElementById("area");
  const yearInput = document.getElementById("year");
  const typeSelect = document.getElementById("type");
  const pricePerSqmInput = document.getElementById("price-per-sqm");
  const expectedProfitInput = document.getElementById("expected-profit");
  const publishBtn = document.getElementById("publish");
  const tableBody = document.getElementById("table-body");
  const propertyList = document.getElementById("property-list");
  const profitDisplay = document.getElementById("profit");
  
  publishBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    const location = locationInput.value;
    const area = areaInput.value;
    const year = yearInput.value;
    const type = typeSelect.value;
    const pricePerSqm = pricePerSqmInput.value;
    const expectedProfit = expectedProfitInput.value;
    
    if (location === "" || area === "" || year === "" || type === "" || type === "Type" || pricePerSqm === "" || expectedProfit === "") {
      return;
    }
    
    const price = (parseFloat(area) * parseFloat(pricePerSqm)).toFixed(2);
    const profitAmount = parseFloat(price) * (parseFloat(expectedProfit) / 100);
    const newPrice = (parseFloat(price) + profitAmount).toFixed(2);
    
    const tr = document.createElement("tr");
    tr.className = "row-entry";
    
    const tdLocation = document.createElement("td");
    tdLocation.textContent = location;
    tr.appendChild(tdLocation);
    
    const tdArea = document.createElement("td");
    tdArea.textContent = area;
    tr.appendChild(tdArea);
    
    const tdYear = document.createElement("td");
    tdYear.textContent = year;
    tr.appendChild(tdYear);
    
    const tdType = document.createElement("td");
    tdType.textContent = type;
    tr.appendChild(tdType);
    
    const tdPrice = document.createElement("td");
    tdPrice.textContent = price;
    tr.appendChild(tdPrice);
    
    const tdNewPrice = document.createElement("td");
    tdNewPrice.textContent = newPrice;
    tr.appendChild(tdNewPrice);
    
    const tdActions = document.createElement("td");
    
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "action-btn edit";
    editBtn.addEventListener("click", function() {
      locationInput.value = location;
      areaInput.value = area;
      yearInput.value = year;
      typeSelect.value = type;
      pricePerSqmInput.value = pricePerSqm;
      expectedProfitInput.value = expectedProfit;
      
      tableBody.removeChild(tr);
    });
    
    const sellBtn = document.createElement("button");
    sellBtn.textContent = "Sell";
    sellBtn.className = "action-btn sell";
    sellBtn.addEventListener("click", function() {
      const profitMade = (parseFloat(newPrice) - parseFloat(price)).toFixed(2);
      
      const li = document.createElement("li");
      li.className = "each-list";
      
      const spanLocationType = document.createElement("span");
      spanLocationType.textContent = location + " - " + type;
      li.appendChild(spanLocationType);
      
      const spanYear = document.createElement("span");
      spanYear.textContent = year;
      li.appendChild(spanYear);
      
      const spanProfit = document.createElement("span");
      spanProfit.textContent = profitMade;
      li.appendChild(spanProfit);
      
      propertyList.appendChild(li);
      
      const currentProfit = parseFloat(profitDisplay.textContent);
      const totalProfit = (currentProfit + parseFloat(profitMade)).toFixed(2);
      profitDisplay.textContent = totalProfit;
      
      tableBody.removeChild(tr);
    });
    
    tdActions.appendChild(editBtn);
    tdActions.appendChild(sellBtn);
    tr.appendChild(tdActions);
    
    tableBody.appendChild(tr);
    
    locationInput.value = "";
    areaInput.value = "";
    yearInput.value = "";
    typeSelect.value = "Type";
    pricePerSqmInput.value = "";
    expectedProfitInput.value = "";
  });
}