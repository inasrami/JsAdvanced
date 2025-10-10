function addItem() {
    const input = document.getElementById("newItemText");

    if(!input.value){
        return;
    }
    
    const item = document.createElement('li');
    item.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = "[Delete]";
    item.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete); 

    function onDelete(event) {
        const row = event.target.parentElement;
        row.remove();
    }

    const list = document.getElementById('items');
    list.appendChild(item);

    list.value = '';

}