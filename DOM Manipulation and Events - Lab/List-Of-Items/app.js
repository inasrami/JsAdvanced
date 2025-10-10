function addItem() {
    const input = document.getElementById("newItemText");

    if(!input.value){
        return;
    }
    
    const item = document.createElement('li');
    item.textContent = input.value;

    const list = document.getElementById('items');
    list.appendChild(item);

    list.value = '';

}