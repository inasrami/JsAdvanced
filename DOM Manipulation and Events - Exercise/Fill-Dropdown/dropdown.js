function addItem() {
    const selectRef = document.getElementById("menu");
    const textRef = document.getElementById("newItemText");
    const valueRef = document.getElementById("newItemValue");

    const key = valueRef.value;
    const value = textRef.value;

    if (!key || !value) {
        return;
    }

    const option = document.createElement("option");
    option.value = key;
    option.textContent = value;

    selectRef.appendChild(option);
    textRef.value = '';
    valueRef.value = '';
}